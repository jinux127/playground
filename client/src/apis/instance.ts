import axios from 'axios';
import { VELOG_URL } from '../constants/url';

export const velogInstance = axios.create({
  baseURL: VELOG_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  },
});
