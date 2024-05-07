import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const rootCss = style({
  borderRadius: '30px',
  overflow: 'hidden',
  backgroundColor: globalVars.color.beige_01,
  position: 'relative',
});

export const imageCss = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  aspectRatio: '35/39',
  borderRadius: '30px',
});
