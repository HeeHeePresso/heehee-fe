import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const imageCss = style({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  objectPosition: 'center',
  backgroundColor: globalVars.color.beige_01,
  borderRadius: '50%',
  display: 'inline-block',
});
