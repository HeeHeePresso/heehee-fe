import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';
import { fixedSize } from '@/systems/constants/fixedSize';

export const rootCss = recipe({
  base: {
    backgroundColor: globalVars.color.background,
    width: '100%',
  },
  variants: {
    size: {
      md: {
        height: `${fixedSize.topNav.md.height}px`,
      },
      lg: {
        height: `${fixedSize.topNav.lg.height}px`,
        paddingBottom: '29px',
      },
    },
    hasShadow: {
      false: {},
      true: {
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    hasShadow: false,
  },
});

export const innerCss = style({
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  padding: '7px 20px',
});

export type RootVariants = RecipeVariants<typeof rootCss>;
