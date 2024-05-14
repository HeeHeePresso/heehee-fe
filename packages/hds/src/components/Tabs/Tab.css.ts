import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';

export const tabCss = recipe({
  base: {
    position: 'relative',
    minWidth: '60px',
    paddingBottom: '20px',
    flexShrink: 0,
    flexGrow: 0,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'color 400ms ease-in-out',
    listStyle: 'none',
    display: 'inline-block',
  },
  variants: {
    isActive: {
      true: {
        '::before': {
          content: '',
          minWidth: '60px',
          width: '100%',
          height: '4px',
          backgroundColor: globalVars.color.text_01,
          position: 'absolute',
          bottom: 0,
          left: 0,
          borderRadius: '8px',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export type TabVariants = RecipeVariants<typeof tabCss>;
