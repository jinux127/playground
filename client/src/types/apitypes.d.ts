import { IapiResponse, IFinder } from './interface';

export interface getFinderDataResponse extends IapiResponse {
  data: IFinder[];
}

export type getFinderDataType = () => Promise<getFinderDataResponse>;
