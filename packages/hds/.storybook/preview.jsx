import { hakgoansimMulgyeolB, pretendard, caniculeDisplayB } from '@/systems/fonts';
import '@/styles/reset.css';
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
      return (
        <div
          className={`${hakgoansimMulgyeolB.variable} ${pretendard.variable} ${caniculeDisplayB.variable}`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
