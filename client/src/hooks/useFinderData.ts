import { useQuery } from '@tanstack/react-query';
import { getFinderData } from '../apis/finder';
const useFinderData = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['useFinderData'],
    queryFn: () => getFinderData(),
    keepPreviousData: true,
    onError(err: any) {
      // console.log(err);
    },
    onSuccess(data) {
      // console.log(data.statusCode);
    },
  });
  return { isError, isLoading, error, data };
};

export default useFinderData;
