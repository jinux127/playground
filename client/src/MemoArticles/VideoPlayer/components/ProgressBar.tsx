import React from 'react';
import styled from 'styled-components';

interface IProps {
  max: number;
  value: number;
  onChange: (progress: number) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

const ProgressBar = ({ max, value, onChange, onMouseDown, onMouseUp }: IProps) => {
  const percentNum = (value / max || 0) * 100;
  const percent = `${percentNum}%`;

  return (
    <Wrapper>
      <Bar style={{ width: percent }}>
        <Controller
          onChange={e => onChange(parseInt(e.target.value, 10))}
          onTouchStart={onMouseDown}
          onTouchEnd={onMouseUp}
          type="range"
          min="0"
          max="100"
          step="1"
          value={percentNum}
        />
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  background-color: gray;
  border-radius: 1.5px;
`;

const Controller = styled.input`
  -webkit-appearance: none !important;
  position: absolute;
  top: 0px;
  margin: 0;
  width: 100%;
  height: 3px;
  background-color: transparent;
  border-radius: 1.5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 13px;
    height: 13px;
    border: solid 0.5px #e6e6e6;
    border-radius: 50%;
    background-color: white;
  }
`;

const Bar = styled.div`
  position: relative;
  height: 3px;
  background-color: white;
  border-radius: 1.5px;
`;

export default ProgressBar;
