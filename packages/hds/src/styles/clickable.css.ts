import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { statusSelectors } from '@/systems/constants/selectors';

export const clickableActionCss = recipe({
  base: {
    cursor: 'pointer',
    selectors: {
      [`${statusSelectors.enabled}:active`]: {
        cursor: 'pointer',
        transition: 'transform 0.3s ease-out',
      },
      [statusSelectors.disabled]: {
        cursor: 'default',
      },
    },
  },
  variants: {
    scale: {
      sm: {
        selectors: {
          [`${statusSelectors.enabled}:active`]: {
            transform: 'scale(0.96)',
          },
        },
      },
      md: {
        selectors: {
          [`${statusSelectors.enabled}:active`]: {
            transform: 'scale(0.91)',
          },
        },
      },
    },
  },
  defaultVariants: {
    scale: 'md',
  },
});

export type ClickableActionVariants = RecipeVariants<typeof clickableActionCss>;
