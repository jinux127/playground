// 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export function createAsyncDispatcher(type: string, promiseFn: (...rest: any) => Promise<any>) {
  // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 새로운 함수를 만듭니다.
  // ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담습니다.
  async function actionHandler(dispatch: any, ...rest: any) {
    dispatch({ type }); // 요청 시작됨
    try {
      const data = await promiseFn(...rest); // rest 배열을 spread 로 넣어줍니다.
      dispatch({
        type: SUCCESS,
        data,
      }); // 성공함
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      }); // 실패함
    }
  }

  return actionHandler; // 만든 함수를 반환합니다.
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 로딩중일 때 바뀔 상태 객체
const loadingState_inifinite = (prevState: any) => {
  return {
    ...prevState,
    loading: true,
  };
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
  loading: false,
  data,
  error: null,
});

// 성공했을 때무한스크롤 상태 만들어주는 함수
const success_infinite = (prevData: any, nextData: any) => {
  return {
    loading: false,
    data: prevData === null ? nextData : [...prevData, ...nextData],
    error: null,
  };
};

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
  loading: false,
  data: null,
  error: error,
});

// 세가지 액션을 처리하는 리듀서를 만들어줍니다
// type 은 액션 타입, key 는 리듀서서 사용할 필드 이름입니다 (예: user, users)
export function createAsyncHandler(type: string, key: string) {
  // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 함수를 새로 만들어서
  function handler(state: any, action: any) {
    switch (action.type) {
      case type:
        if (type === 'GET_PHOTOS') {
          const prevState = state[key];
          return {
            ...state,
            [key]: loadingState_inifinite(prevState),
          };
        }

        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        if (type === 'GET_PHOTOS') {
          const prevData = state[key].data;
          const nextData = action.data;
          return {
            ...state,
            [key]: success_infinite(prevData, nextData),
          };
        }
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }

  // 반환합니다
  return handler;
}
