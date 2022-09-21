import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ count, carouselList, carouselRef, handleCarousel, isView }) => {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    document.onkeydown = isView ? e => console.log(e) : null;
  }, [isView]);

  const imgSize = useRef(4);

  const moveSlide = i => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= 4) nextIndex = 0;

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
            <CarouselItem style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>tesgggt</CarouselItem>
            <CarouselItem style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>a</CarouselItem>
            <CarouselItem style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>b</CarouselItem>
            <CarouselItem style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>c</CarouselItem>
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
const CarouselItem = styled.div`
  width: 90vw;
  height: 90vh;
  border: 1px solid;
  flex-shrink: 0;
`;

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
  transition: all 1s cubic-bezier(0.1, 0.2, 0.3, 1);
  display: flex;
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
