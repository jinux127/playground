import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../hooks/useDebounce';

const ToastBox = () => {
  const [click, setClick] = useState(false);
  const handleCloseAlert = () => {
    setClick(false);
  };

  const debounceClick = useDebounce(() => handleCloseAlert(), 3000);
  useEffect(() => {
    if (click) {
      debounceClick();
    }
  }, [click, debounceClick]);

  return (
    <>
      <button onClick={() => setClick(true)} style={{ background: 'white', width: '4rem' }}>
        버튼
      </button>
      {click && <Box>토스트 메시지</Box>}
    </>
  );
};

const Box = styled.div`
  position: absolute;
  top: 10rem;
  background-color: greenyellow;
  color: black;
  padding: 0.5rem 2rem;
`;

export default ToastBox;
