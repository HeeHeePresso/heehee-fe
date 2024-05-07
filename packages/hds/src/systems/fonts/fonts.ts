import localFont from 'next/font/local';

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  fallback: ['Apple SD Gothic Neo', 'Noto Sans KR'],
});

export const hakgoansimMulgyeolB = localFont({
  src: './HakgyoansimMulgyeolB.woff2',
  display: 'swap',
  variable: '--font-hakgoansimMulgyeolB',
  fallback: ['Apple SD Gothic Neo', 'Noto Sans KR'],
});

export const DMSerifDisplay = localFont({
  src: './DMSerifDisplay-Regular.woff2',
  display: 'swap',
  variable: '--font-DMSerifDisplay',
  fallback: ['Apple SD Gothic Neo', 'Noto Sans KR'],
});

export const caniculeDisplayB = localFont({
  src: './CaniculeDisplayv0.1-Bold.Trial.woff2',
  display: 'swap',
  variable: '--font-caniculeDisplayB',
  fallback: ['Apple SD Gothic Neo', 'Noto Sans KR'],
});
