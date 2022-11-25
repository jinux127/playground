import axios from 'axios';
import { getFinderDataType } from '../types/apitypes';

export const getFinderData: getFinderDataType = () => axios.get('api/data').then(res => res.data);
