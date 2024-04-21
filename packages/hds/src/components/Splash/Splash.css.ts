import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const splashBoxCss = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const logoCss = style({
  fontFamily: globalVars.font.caniculeDisplayB,
  color: globalVars.color.main_01,
  fontWeight: 'bold',
  fontSize: '32px',
  letterSpacing: 0,
  textAlign: 'center',
  padding: '144px 20px 0',
  backgroundColor: globalVars.color.background,
  width: '100%',
});
