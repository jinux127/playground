import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ count, carouselList, carouselRef, handleCarousel }) => {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  const imgSize = useRef(3);

  const moveSlide = i => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= 3) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <Wrapper>
      <CarouselWrapper>
        <div
          className="btn"
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </div>
        <Window>
          <FlexBox style={style}>
            <div
              className="img"
              style={{
                backgroundImage: `url("https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black")`,
              }}
            ></div>
            <div
              className="img"
              style={{
                backgroundImage: `url("https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black")`,
              }}
            ></div>
            <div
              className="img"
              style={{
                backgroundImage: `url("https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white")`,
              }}
            ></div>
          </FlexBox>
        </Window>
        <div
          className="btn"
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </div>
      </CarouselWrapper>

      {/* <div className="position">
        {images.current.map((x, i) => (
          <div key={i} className={i === current ? 'dot current' : 'dot'}></div>
        ))}
      </div> */}
    </Wrapper>
  );
};

const Window = styled.div`
  width: 90vw;
  height: 90vh;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  width: 90vw;
  .img {
    width: 90vw;
    height: 90vh;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dot {
    background: lightgray;
    border-radius: 100%;
    height: 10px;
    width: 10px;
  }
  .dot + .dot {
    margin-left: 20px;
  }

  .current {
    background: gray;
  }
  .btn {
    margin: 10px;
    cursor: pointer;
  }
`;

export default Carousel;
