import axios from 'axios';

const BASE_URL = process.env.REACT_APP_UNSPLASH_BASE_URL;
const KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const unsplash = axios.create({
  baseURL: BASE_URL + `/?client_id=${KEY}`,
});
