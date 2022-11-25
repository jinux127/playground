import { useEffect, useRef } from 'react';

interface IuseOutSideClickProps {
  outSideCallback: () => void;
}

const useOutSideClick = <T>({ outSideCallback }: IuseOutSideClickProps) => {
  let focusRef = useRef<T | any>(null);

  useEffect(() => {
    function handleOutside(e: any) {
      if (focusRef.current && !focusRef.current.contains(e.target)) {
        outSideCallback();
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [focusRef, outSideCallback]);

  return { focusRef };
};

export default useOutSideClick;
