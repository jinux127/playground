import axios from 'axios';

interface IPostMail {
  contents: string;
  name: string;
  email: string;
}

export const postMail = async (mail: IPostMail) => {
  try {
    const res = await axios.post('/api/mail', mail);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};
