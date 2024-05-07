import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import globalVars from '@/styles/globalVars.css';

export const typoCss = recipe({
  base: {
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 0,
    lineHeight: 1.2,
  },
  variants: {
    color: {
      main_01: {
        color: globalVars.color.main_01,
      },
      main_02: {
        color: globalVars.color.main_02,
      },
      text_01: {
        color: globalVars.color.text_01,
      },
      text_02: {
        color: globalVars.color.text_02,
      },
      background: {
        color: globalVars.color.background,
      },
      beige_01: {
        color: globalVars.color.beige_01,
      },
      beige_02: {
        color: globalVars.color.beige_02,
      },
    },
    wrap: {
      false: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
      },
      true: {},
    },
    lines: {
      1: {
        WebkitLineClamp: 1,
        maxHeight: 'calc(136% * 1)',
      },
      2: {
        WebkitLineClamp: 2,
        maxHeight: 'calc(136% * 2)',
      },
      3: {
        WebkitLineClamp: 3,
        maxHeight: 'calc(136% * 3)',
      },
    },
    variant: {
      header: {
        fontWeight: 700,
        lineHeight: '136%',
        fontFamily: globalVars.font.hakgoansimMulgyeolB,
      },
      subtitle: {
        fontWeight: 700,
        lineHeight: '136%',
        fontFamily: globalVars.font.DMSerifDisplay,
      },
      text: {
        fontWeight: 700,
        lineHeight: '136%',
      },
      text_bold: {
        fontWeight: 700,
        lineHeight: '136%',
      },
      text_regular: {
        fontWeight: 400,
        lineHeight: '136%',
      },
      small_bold: {
        fontWeight: 700,
        lineHeight: '136%',
      },
      small_regular: {
        fontWeight: 400,
        lineHeight: '144%',
      },
    },
    size: {
      24: {
        fontSize: '24px',
      },
      18: {
        fontSize: '18px',
      },
      14: {
        fontSize: '14px',
      },
    },
  },
  defaultVariants: {
    color: 'text_01',
    wrap: true,
    variant: 'text_regular',
    size: 18,
    lines: 1,
  },
  compoundVariants: [
    {
      variants: {
        lines: 1,
        variant: 'small_regular',
      },
      style: {
        maxHeight: 'calc(144% * 1)',
      },
    },
    {
      variants: {
        lines: 2,
        variant: 'small_regular',
      },
      style: {
        maxHeight: 'calc(144% * 2)',
      },
    },
    {
      variants: {
        lines: 3,
        variant: 'small_regular',
      },
      style: {
        maxHeight: 'calc(144% * 3)',
      },
    },
  ],
});

export type TypoVariants = RecipeVariants<typeof typoCss>;
