import React from 'react';

export const preload = (preload: string | any[], callback: () => void) => {
  let images: HTMLImageElement[] = [];

  for (let i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
    images[i].onload = () => {
      callback();
    };
  }
};
export const refScrollTop = (ref: React.RefObject<any>) => {
  if (ref === null || ref.current === null) return;
  ref.current.scrollTop = ref.current.scrollHeight;
};

export const toTimeString = (second: number) => {
  const date = new Date(second * 1000);

  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getSeconds();

  const formattedHours = hh + ':';
  const formattedMinute = mm + ':';
  const formattedSecond = (ss < 10 ? '0' : '') + ss;

  return hh
    ? formattedHours + formattedMinute + formattedSecond
    : formattedMinute + formattedSecond;
};
