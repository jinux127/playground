import { useCallback, useEffect, useRef } from 'react';

// const defaultOptions = {
//   root: null,
//   rootMargin: '1px',
//   threshold: '0.5',
// };

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

/**
 * @param root target의 가시성을 확인할 때 사용되는 상위 속성 이름- null 입력 시, 기본값으로 브라우저의 Viewport가 설정됨
 * @param rootMargin root에 마진값을 주어 범위를 확장 가능- 기본값은 0px 0px 0px 0px이며, 반드시 단위 입력 필요
 * @param threshold 콜백이 실행되기 위해 target의 가시성이 얼마나 필요한지 백분율로 표시- 기본값은 배열 [0] 이며, Number 타입의 단일 값으로도 작성 가능
 */
interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};
