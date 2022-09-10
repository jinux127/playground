import { velogInstance } from './instance';

export const getHTML = async (url: string) => {
  try {
    return await velogInstance.get(url);
  } catch (error: any) {
    return new Error(`${error.name}: ${error.message}`);
  }
};
