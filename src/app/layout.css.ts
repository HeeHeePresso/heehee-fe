import { style } from '@vanilla-extract/css';
import { breakPointQueries } from '@hehe/hds/systems/constants/mediaQueries';
import globalVars from '@hehe/hds/styles/globalVars.css';

const TEMPLATE_MAX_WIDTH = '390px';

export const templateCss = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const templateLeftCss = style({
  maxWidth: TEMPLATE_MAX_WIDTH,
  backgroundColor: 'aliceblue',
  flexGrow: 0,
  flexShrink: 0,
  position: 'relative',
  borderLeft: `1px solid ${globalVars.color.beige_02}`,
  '@media': {
    [breakPointQueries.md]: {
      display: 'none',
    },
  },
});

export const templateRightCss = style({
  maxWidth: TEMPLATE_MAX_WIDTH,
  flexGrow: 1,
  flexShrink: 1,
  border: `1px solid ${globalVars.color.beige_02}`,
  borderWidth: '0 1px',
  position: 'relative',
  overflowX: 'hidden',
});
