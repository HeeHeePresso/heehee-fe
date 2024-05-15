import { style } from '@vanilla-extract/css';

export const rootCss = style({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  padding: '0 20px',
  gap: 20,
  alignItems: 'center',
});

export const bodyCss = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const titleWrapperCss = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 2,
});
