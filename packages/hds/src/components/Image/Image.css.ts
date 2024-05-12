import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const imageStyle = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  backgroundColor: globalVars.color.background,
});

export const ratios = {
  '16/9': style({
    aspectRatio: '16/9',
  }),
  '3/4': style({
    aspectRatio: '3/4',
  }),
  '1/1': style({
    aspectRatio: '1/1',
  }),
};
