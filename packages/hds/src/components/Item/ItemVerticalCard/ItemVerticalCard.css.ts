import { style } from '@vanilla-extract/css';

export const rootCss = style({
  textAlign: 'center',
  width: '100px',
});

export const infoCss = style({
  width: 'inherit',
  marginTop: '10px',
});

export const titleCss = style({
  wordBreak: 'break-word',
});

export const priceCss = style({
  wordBreak: 'break-all',
});
