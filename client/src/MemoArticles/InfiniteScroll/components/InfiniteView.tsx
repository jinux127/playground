import React, { useState } from 'react';
import styled from 'styled-components';
import { getPhotos, useUnsplashDispatch, useUnsplashState } from '../context/UnsplashContext';
import { useIntersect } from '../hooks/useIntersect';
import Loading from './Loading';

const InfiniteView = () => {
  const state = useUnsplashState();
  const dispatch = useUnsplashDispatch();
  const [page, setPage] = useState(1);

  const { data: photos, loading, error } = state.photos;

  const fetchData = (page: number, per_page: number, order_by = 'popular') => {
    getPhotos(dispatch, page, per_page);
    setPage(cur => cur + 1);
  };

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (!loading) {
      fetchData(page, 4);
    }
  });

  if (error) <div>토큰이 만료됐거나 에러입니다..</div>;

  return (
    <Wrapper>
      {photos
        ? photos.map(photo => (
            <ImageWrapper key={photo.id}>
              <img src={photo.urls.raw} alt={photo.description} />
            </ImageWrapper>
          ))
        : null}

      {loading ? (
        <ImageWrapper>
          <Loading />
        </ImageWrapper>
      ) : (
        <Target ref={ref} />
      )}
    </Wrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Target = styled.div`
  height: 1px;
`;

export default InfiniteView;
