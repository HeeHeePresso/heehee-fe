import { recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';

export const rootCss = recipe({
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    isTransparent: {
      true: {
        backgroundColor: globalVars.color.background,
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    isTransparent: false,
  },
});
