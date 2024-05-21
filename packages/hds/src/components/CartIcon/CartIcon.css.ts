import globalVars from '@/styles/globalVars.css';
import { style } from '@vanilla-extract/css';

export const CartIcon = style({
  width: '78px',
  height: '78px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  right: '20px',
  bottom: '127px',

  zIndex: 10,
  backgroundColor: globalVars.color.main_02,
  borderRadius: '100%',

  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
});
