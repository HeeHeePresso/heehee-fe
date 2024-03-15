import { hakgoansimMulgyeolB, pretendard, caniculeDisplayB } from '../src/tokens/fonts';
import '../src/styles/reset.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
