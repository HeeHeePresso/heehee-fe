import { style } from '@vanilla-extract/css';

export const guageCss = style({
  width: '350px',
  height: '8px',
  borderRadius: '20px',
  position: 'relative',
   transition: 'all 0.25s ease-in-out',
});

export const guageBar = style([guageCss, { position: 'absolute', top: '0' }]);
