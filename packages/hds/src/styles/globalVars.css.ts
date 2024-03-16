import { createGlobalTheme } from '@vanilla-extract/css';

const globalVars = createGlobalTheme(':root', {
  color: {
    'main-01': '#EF5E08',
    'main-02': '#264300',
    'text-01': '#222222',
    'text-02': '#8B8B8B',
    background: '#FFFEFB',
    'beige-01': '#F9F2E7',
    'beige-02': '#E5DED4',
  },
  font: {
    pretendard: 'var(--font-pretendard)',
    hakgoansimMulgyeolB: 'var(--font-hakgoansimMulgyeolB)',
    caniculeDisplayB: 'var(--font-caniculeDisplayB)',
  },
});

export default globalVars;
