import { velogInstance } from './instance';

export const getHTML = async (url: string) => {
  try {
    // eslint-disable-next-line no-console
    console.log(url);
    return await velogInstance.get(url);
  } catch (error: any) {
    return new Error(`${error.name}: ${error.message}`);
  }
};
