import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import globalVars from '@hehe/hds/styles/globalVars.css';

export const rootCss = style({
  padding: `20px ${globalVars.spacing.x}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const desc = style({
  backgroundColor: '#ECECEC',
  padding: '8px',
  borderRadius: '4px',
  minHeight: '200px',
});

export const btnWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const btn = recipe({
  base: {
    flex: '1 1',
    color: globalVars.color.background,
    borderRadius: '8px',
    padding: '12px 4px',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: globalVars.color.main_01,
      },
      secondary: {
        backgroundColor: globalVars.color.main_02,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
