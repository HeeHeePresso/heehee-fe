import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  fontFamily: 'Pretendard, Apple SD Gothic Neo, Noto Sans KR',
});

globalStyle('#storybook-root:not([hidden])', {
  width: '100%',
  height: '100%',
});
