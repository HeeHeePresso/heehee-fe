import { createGlobalTheme } from '@vanilla-extract/css';

const globalVars = createGlobalTheme(':root', {
  color: {
    main_01: '#EF5E08',
    main_02: '#264300',
    text_01: '#222222',
    text_02: '#8B8B8B',
    background: '#FFFEFB',
    beige_01: '#F9F2E7',
    beige_02: '#E5DED4',
  },
  font: {
    pretendard: 'var(--font-pretendard)',
    hakgoansimMulgyeolB: 'var(--font-hakgoansimMulgyeolB)',
    caniculeDisplayB: 'var(--font-caniculeDisplayB)',
  },
});

export default globalVars;
