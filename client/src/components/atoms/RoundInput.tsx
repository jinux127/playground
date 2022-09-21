import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

type RoundInputProps = {
  onSubmit: (any) => void;
};

const RoundInput = ({ onSubmit }: RoundInputProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  const handleResizeHeight = useCallback(() => {
    if (textRef.current === null || textRef === null) return;

    textRef.current.style.height = '30px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const onEnterPress = (e: any) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (!text.trim()) return;

      if (textRef.current === null || textRef === null) return;
      onSubmit(text);
      textRef.current.style.height = '30px';

      setText('');
    }
  };

  return (
    <Wrapper>
      <textarea
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        ref={textRef}
        onInput={handleResizeHeight}
        placeholder="이메일로 전송됩니다."
        onKeyDown={onEnterPress}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 20px;
  justify-content: center;
  display: flex;
  margin: 10px 0;
  textarea {
    padding: 6px 10px;
    border: 0.1px solid #939393;
    border-radius: 15px;
    font-size: 16px;
    width: 100%;
    max-height: 75px;
    height: 30px;
    color: white;
    resize: none;
  }
`;

export default RoundInput;
