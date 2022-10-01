import { useState } from 'react';

const useDrag = (left: number, top: number) => {
  const [x, setX] = useState(left);
  const [y, setY] = useState(top);
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);

  const handleMouseDown = e => {
    setShiftX(e.clientX - e.target.getBoundingClientRect().left);
    setShiftY(e.clientY - e.target.getBoundingClientRect().top);
    setIsKeyDown(true);
  };

  const handleMouseMove = e => {
    if (isKeyDown) {
      setX(e.pageX - shiftX);
      setY(e.pageY - shiftY);
    }
  };

  const handleMouseUp = () => {
    setIsKeyDown(false);
  };

  return {
    x,
    y,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useDrag;
