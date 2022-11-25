import { useState } from 'react';

const useMacAlert = () => {
  const [macAlert, setMacAlert] = useState({ title: '', url: '', icon: '', isView: false });

  const handleCloseAlert = () => {
    setMacAlert(cur => ({ ...cur, isView: false }));
  };

  return { macAlert, handleCloseAlert, setMacAlert };
};

export default useMacAlert;
