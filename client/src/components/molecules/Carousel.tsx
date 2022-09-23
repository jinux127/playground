import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import PadIconInfo from '../../PadIconInfo';

const Carousel = ({ count, carouselList, carouselRef, handleCarousel, isView }) => {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    document.onkeydown = isView ? e => console.log(e) : null;
  }, [isView]);

  const imgSize = useRef(1);

  const moveSlide = i => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= 1) nextIndex = 0;

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
            <CarouselItem>
              <ContentGridWrapper>
                {PadIconInfo.map(iconInfo => {
                  return (
                    <GridItem content={iconInfo.title}>
                      <img src={iconInfo.icon} alt={iconInfo.title} />
                    </GridItem>
                  );
                })}
              </ContentGridWrapper>
            </CarouselItem>
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

// const IconDefault = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: rgba(255, 255, 255, 0.5);
//   padding: 2px;
//   border-radius: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   img {
//     object-fit: cover;
//   }
//   ::after {
//     content: '테스트';
//     position: absolute;
//     bottom: -25px;
//   }
// `;

const GridItem = styled.div<{ content: string }>`
  width: 100px;
  height: 100px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  padding: 2px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  ::after {
    content: '${props => props.content}';
    position: absolute;
    bottom: -25px;
  }
  cursor: pointer;
`;

const ContentGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const CarouselItem = styled.div`
  width: 90vw;
  height: 90vh;

  display: grid;
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
  transition: all 0.4s cubic-bezier(0.5, 0.5, 1, 0.8);
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
