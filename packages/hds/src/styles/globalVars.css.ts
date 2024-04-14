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
    DMSerifDisplay: 'var(--font-DMSerifDisplay)',
    caniculeDisplayB: 'var(--font-caniculeDisplayB)',
  },
  spacing: {
    /** 사이드 여백 */
    x: '20px',
  },
  zIndex: {
    swiper: {
      pagination: '1',
    },
    floating: {
      topNav: '10',
      bottomNav: '1',
    },
  },
});

export default globalVars;
