import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const rootCSS = style({
  backgroundColor: globalVars.color.background,
});
