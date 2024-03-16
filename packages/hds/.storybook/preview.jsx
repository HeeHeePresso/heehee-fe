import { hakgoansimMulgyeolB, pretendard, caniculeDisplayB } from '@/systems/fonts';
import '@/styles/reset.css';
import '@/styles/resetStorybook.css';
import '@/styles/globalVars.css';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS },
      defaultViewport: 'iphone14',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      if (window?.document?.documentElement) {
        // next/font 오류로 인해 스토리북 환경에서는 pretendard var 대신 FontFamily 로 사용
        window.document.documentElement.classList.add(
          hakgoansimMulgyeolB.variable,
          caniculeDisplayB.variable
        );
      }

      return <Story />;
    },
  ],
};

export default preview;
