import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const logoCss = style({
  flexGrow: 1,
  flexShrink: 0,
  fontFamily: globalVars.font.caniculeDisplayB,
  color: globalVars.color.main_01,
  fontWeight: 'bold',
  fontSize: '20px',
  letterSpacing: 0,
  textAlign: 'center',
  lineHeight: 1.05,
});
export const titleCss = style({
  flexGrow: 1,
  flexShrink: 1,
  textAlign: 'center',
});
