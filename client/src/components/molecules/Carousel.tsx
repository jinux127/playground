import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import PadIconInfo from '../../PadIconInfo';

const Carousel = ({
  count,
  carouselList,
  carouselRef,
  handleCarousel,
  isView,
  setMacAlert,
  closeEvent,
}) => {
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

  const handleAppClick = (
    e: React.MouseEvent,
    props: { icon: string; title: string; url: string }
  ) => {
    e.stopPropagation();
    if (isView) {
      setMacAlert({ ...props, isView: true });
      closeEvent();
    }
  };

  return (
    <Wrapper>
      <CarouselWrapper>
        <ArrowButton
          className="btn"
          onClick={e => {
            e.stopPropagation();
            moveSlide(-1);
          }}
        >
          &lt;
        </ArrowButton>
        <Window>
          <FlexBox style={style}>
            <CarouselItem>
              <ContentGridWrapper>
                {PadIconInfo.map((iconInfo, i) => {
                  return (
                    <GridItem
                      key={i}
                      onClick={e => handleAppClick(e, { ...iconInfo })}
                      isView={isView}
                    >
                      <img src={iconInfo.icon} alt={iconInfo.title} />
                      <span>{iconInfo.title}</span>
                    </GridItem>
                  );
                })}
              </ContentGridWrapper>
            </CarouselItem>
          </FlexBox>
        </Window>
        <ArrowButton
          className="btn"
          onClick={e => {
            e.stopPropagation();
            moveSlide(1);
          }}
        >
          &gt;
        </ArrowButton>
      </CarouselWrapper>

      {/* <div className="position">
        {images.current.map((x, i) => (
          <div key={i} className={i === current ? 'dot current' : 'dot'}></div>
        ))}
      </div> */}
    </Wrapper>
  );
};

const ArrowButton = styled.div``;

const GridItem = styled.div<{ isView: boolean }>`
  width: 100px;
  height: 100px;

  padding: 2px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: ${props => (props.isView ? 'pointer' : '')};

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  span {
    margin: 0.5rem;
    font-size: 0.8rem;
  }
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
