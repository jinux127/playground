export const preload = (preload: string | any[], callback: () => void) => {
  let images: HTMLImageElement[] = [];

  for (let i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
    images[i].onload = () => {
      // eslint-disable-next-line no-console
      console.log('loaded');
      callback();
    };
  }
};
