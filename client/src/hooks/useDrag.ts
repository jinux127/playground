import React, { useState } from 'react';

const useDrag = (left: number, top: number) => {
  const [x, setX] = useState(left);
  const [y, setY] = useState(top);
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.getBoundingClientRect().width <= 100) return;
    setShiftX(e.clientX - target.getBoundingClientRect().left);
    setShiftY(e.clientY - target.getBoundingClientRect().top);
    setIsKeyDown(true);
  };

  const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
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
