import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  fontFamily: 'var(--font-pretenard)',
  color: 'black',
  fontSize: 'inherit',
  fontSynthesis: 'none',
  lineHeight: 1.2,
  touchAction: 'manipulation',
  margin: 0,
  padding: 0,
  border: 0,
  verticalAlign: 'baseline',
  textDecoration: 'none',
  boxSizing: 'border-box',
});

globalStyle('*:hover', {
  outline: 'none',
});

globalStyle('*:focus', {
  outline: 'none',
});

globalStyle('ol,ul', {
  listStyle: 'none',
});

globalStyle('html,body,#root', {
  background: 'white',
  width: '100%',
  height: '100%',
});

globalStyle('a,button', {
  cursor: 'pointer',
});
