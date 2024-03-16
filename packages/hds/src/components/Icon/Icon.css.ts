import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';
import recipeGlobalStyle from '@/utils/recipeGlobalStyle';

export const iconCss = recipe({
  base: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
  },
  variants: {
    fill: {
      main_01: {},
      main_02: {},
      text_01: {},
      text_02: {},
      background: {},
      beige_01: {},
      beige_02: {},
    },
  },
  defaultVariants: {
    fill: 'text_01',
  },
});

recipeGlobalStyle(iconCss({ fill: 'main_01' }), 'path', { fill: globalVars.color.main_01 });
recipeGlobalStyle(iconCss({ fill: 'main_02' }), 'path', { fill: globalVars.color.main_02 });
recipeGlobalStyle(iconCss({ fill: 'text_01' }), 'path', { fill: globalVars.color.text_01 });
recipeGlobalStyle(iconCss({ fill: 'text_02' }), 'path', { fill: globalVars.color.text_02 });
recipeGlobalStyle(iconCss({ fill: 'background' }), 'path', {
  fill: globalVars.color.background,
});
recipeGlobalStyle(iconCss({ fill: 'beige_01' }), 'path', { fill: globalVars.color.beige_01 });
recipeGlobalStyle(iconCss({ fill: 'beige_02' }), 'path', { fill: globalVars.color.beige_02 });

export type IconVariants = RecipeVariants<typeof iconCss>;
