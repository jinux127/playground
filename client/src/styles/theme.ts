import media from './media';

const color = {
  white: 'white',
  black: 'black',
};

const ButtonSize = {
  DockButton: 70,
};

export const theme = {
  color,
  ButtonSize,
  media,
};

export type Theme = typeof theme;
