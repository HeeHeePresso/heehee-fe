import { style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';

export const FlexCss = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Container = style({
  width: '100%',
  background: globalVars.color.beige_01,
  padding: `13px ${globalVars.spacing.x}`,
});

export const IconCss = style({
  marginRight: '10px',
  padding: '2px 5px',
});

export const ButtonCss = style({
  padding: '11px 15px',
  border: `1px solid ${globalVars.color.main_01}`,
  borderRadius: '50px',
  backgroundColor: 'transparent',
});
