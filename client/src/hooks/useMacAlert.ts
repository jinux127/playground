import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useMacAlert = () => {
  const [macAlert, setMacAlert] = useState({ title: '', url: '', icon: '', isView: false });
  const handleCloseAlert = () => {
    setMacAlert(cur => ({ ...cur, isView: false }));
  };

  const debounceMacAlert = useDebounce(() => handleCloseAlert(), 3000);
  useEffect(() => {
    if (macAlert.isView) {
      debounceMacAlert();
    }
  }, [macAlert, debounceMacAlert]);

  return { macAlert, handleCloseAlert, setMacAlert };
};

export default useMacAlert;
