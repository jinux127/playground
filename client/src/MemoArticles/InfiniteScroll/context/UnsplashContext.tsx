import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from '../utils/asyncActionUtils';
import * as unsplashApi from '../apis/unsplashApi';
import { IUnsplash } from '../types/interface';

const unsplashHandler = createAsyncHandler('GET_PHOTOS', 'photos');

function unsplashReducer(state: IUnsplash[], action: Action) {
  switch (action.type) {
    case 'GET_PHOTOS':
    case 'GET_PHOTOS_SUCCESS':
    case 'GET_PHOTOS_ERROR':
      return unsplashHandler(state, action);
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

type photoState = {
  data: IUnsplash[];
  loading: boolean;
  error: string;
};

export type UnsplashState = {
  photos: photoState;
};

const UnsplashStateContext = createContext<UnsplashState | null>(null);

type Action =
  | { type: 'GET_PHOTOS' }
  | { type: 'GET_PHOTOS_SUCCESS' }
  | { type: 'GET_PHOTOS_ERROR' };

type UnsplashDispatch = Dispatch<Action>;

const UnsplashDispatchContext = createContext<UnsplashDispatch | null>(null);

// Context 에서 사용 할 기본 상태
const initialState = {
  photos: initialAsyncState,
};

type UnsplashProviderProps = {
  children: React.ReactNode;
};

export function UnsplashProvider({ children }: UnsplashProviderProps) {
  const [state, dispatch] = useReducer(unsplashReducer, initialState);
  return (
    <UnsplashStateContext.Provider value={state}>
      <UnsplashDispatchContext.Provider value={dispatch}>
        {children}
      </UnsplashDispatchContext.Provider>
    </UnsplashStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUnsplashState() {
  const state = useContext(UnsplashStateContext);
  if (!state) {
    throw new Error('Cannot find UnsplashProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUnsplashDispatch() {
  const dispatch = useContext(UnsplashDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UnsplashProvider');
  }
  return dispatch;
}

export const getPhotos = createAsyncDispatcher('GET_PHOTOS', unsplashApi.getPhotos);
