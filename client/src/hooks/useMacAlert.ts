import { useEffect, useState } from 'react';

const useMacAlert = () => {
  const [macAlert, setMacAlert] = useState({ title: '', url: '', icon: '', isView: false });

  const handleCloseAlert = () => {
    setMacAlert(cur => ({ ...cur, isView: false }));
  };

  useEffect(() => {
    if (macAlert.isView) {
      setTimeout(() => {
        handleCloseAlert();
      }, 3000);
    }
  }, [macAlert]);

  return { macAlert, handleCloseAlert, setMacAlert };
};

export default useMacAlert;
