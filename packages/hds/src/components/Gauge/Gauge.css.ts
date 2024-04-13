import { style } from '@vanilla-extract/css';

export const guageBackground = style({
  width: 'fit-content',
  height: '8px',
  borderRadius: '20px',
});
export const guageProgress = style({
  height: 'inherit',
  borderRadius: '20px',
  transition: 'width 0.25s ease-in-out',
});
