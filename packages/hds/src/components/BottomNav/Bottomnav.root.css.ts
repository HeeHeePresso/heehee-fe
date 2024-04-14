import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';
import { fixedSize } from '@/systems/constants/fixedSize';

export const rootCss = style({
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  height: `${fixedSize.bottomNav.height}px`,
  backgroundColor: globalVars.color.background,
  padding: '15px 35px 41px',
  boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.25)',
  borderRadius: '30px 30px 0 0',
  width: '100%',
});
