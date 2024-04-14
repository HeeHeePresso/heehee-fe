import { globalStyle, style } from '@vanilla-extract/css';
import globalVars from '@/styles/globalVars.css';
import { hoverQuery } from '@/systems/constants/mediaQueries';
import { rawStatusSelectors } from '@/systems/constants/selectors';

export const rootCss = style({
  display: 'inline-flex !important',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${rootCss}${rawStatusSelectors.enabled}:active`, {
  transition: 'transform 0.3s ease-in-out',
  transform: 'scale(0.91)', //clickable 'md'
});

globalStyle(`${rootCss}${rawStatusSelectors.enabled}:hover path`, {
  transition: 'fill 0.3s ease-in-out',

  '@media': {
    [hoverQuery]: {
      fill: globalVars.color.main_01,
    },
  },
});

globalStyle(`${rootCss}${rawStatusSelectors.enabled}:active path`, {
  transition: 'fill 0.3s ease-in-out',
  fill: globalVars.color.main_01,
});

globalStyle(`${rootCss}${rawStatusSelectors.enabled}:hover > span`, {
  transition: 'color 0.3s ease-in-out',

  '@media': {
    [hoverQuery]: {
      color: globalVars.color.main_01,
    },
  },
});

globalStyle(`${rootCss}${rawStatusSelectors.enabled}:active > span`, {
  transition: 'color 0.3s ease-in-out',
  color: globalVars.color.main_01,
});
