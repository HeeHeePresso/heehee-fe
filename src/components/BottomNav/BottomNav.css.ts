import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const rootCss = style({
  position: 'sticky',
  bottom: 0,
  left: 0,
  zIndex: globalVars.zIndex.floating.bottomNav,
});
