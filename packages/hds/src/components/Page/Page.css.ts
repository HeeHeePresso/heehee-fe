import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css.ts';

export const rootCSs = recipe({
  base: {
    width: '100%',
    height: '100%',
  },
  variants: {
    backgroundColor: {
      main_01: {
        backgroundColor: globalVars.color.main_01,
      },
      main_02: {
        backgroundColor: globalVars.color.main_02,
      },
      text_01: {
        backgroundColor: globalVars.color.text_01,
      },
      text_02: {
        backgroundColor: globalVars.color.text_02,
      },
      background: {
        backgroundColor: globalVars.color.background,
      },
      beige_01: {
        backgroundColor: globalVars.color.beige_01,
      },
      beige_02: {
        backgroundColor: globalVars.color.beige_02,
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'background',
  },
});

export type RootVariants = RecipeVariants<typeof rootCSs>;
