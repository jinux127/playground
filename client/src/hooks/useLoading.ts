import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { preload } from '../utils';
interface IuseLoadingProps {
  initialCount?: number;
  loadFiles: any[] | string;
  countDistance?: number;
  ms?: number;
}
const useLoading = ({
  initialCount = 10,
  loadFiles,
  countDistance = 5,
  ms = 150,
}: IuseLoadingProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(initialCount);
  const countInterval = useRef<any>(null);

  useEffect(() => {
    preload(loadFiles, () => setCount(old => old + countDistance));

    countInterval.current = setInterval(() => {
      setCount(old => old + 1);
    }, ms);

    return () => {
      clearInterval(countInterval.current);
    };
  }, []);

  useEffect(() => {
    if (count >= 100) {
      setCount(0);
      navigate('/home');
    }
  }, [count, navigate]);

  return { count };
};

export default useLoading;
