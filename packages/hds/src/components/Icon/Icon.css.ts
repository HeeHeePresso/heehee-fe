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
      'main-01': {},
      'main-02': {},
      'text-01': {},
      'text-02': {},
      background: {},
      'beige-01': {},
      'beige-02': {},
    },
  },
  defaultVariants: {
    fill: 'text-01',
  },
});

recipeGlobalStyle(iconCss({ fill: 'main-01' }), 'path', { fill: globalVars.color['main-01'] });
recipeGlobalStyle(iconCss({ fill: 'main-02' }), 'path', { fill: globalVars.color['main-02'] });
recipeGlobalStyle(iconCss({ fill: 'text-01' }), 'path', { fill: globalVars.color['text-01'] });
recipeGlobalStyle(iconCss({ fill: 'text-02' }), 'path', { fill: globalVars.color['text-02'] });
recipeGlobalStyle(iconCss({ fill: 'background' }), 'path', {
  fill: globalVars.color.background,
});
recipeGlobalStyle(iconCss({ fill: 'beige-01' }), 'path', { fill: globalVars.color['beige-01'] });
recipeGlobalStyle(iconCss({ fill: 'beige-02' }), 'path', { fill: globalVars.color['beige-02'] });

export type IconVariants = RecipeVariants<typeof iconCss>;
