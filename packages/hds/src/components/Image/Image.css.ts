import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';

export const imageStyle = style({
  width: '100%',
  height: '100%',
  display: 'block',
  fontSize: 0,
  objectFit: 'cover',
  objectPosition: 'center',
  backgroundColor: globalVars.color.beige_01,
});

export const ratioCss = recipe({
  variants: {
    ratio: {
      '16/9': {
        aspectRatio: '16/9',
      },
      '3/4': {
        aspectRatio: '3/4',
      },
      '1/1': {
        aspectRatio: '1/1',
      },
    },
  },
});

export type RatioVariants = RecipeVariants<typeof ratioCss>;
