import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    let id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
