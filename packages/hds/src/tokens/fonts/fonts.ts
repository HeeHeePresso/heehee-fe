import localFont from 'next/font/local';

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  fallback: ['Apple Apple SD Gothic Neo', 'Noto Sans KR'],
});

export const hakgoansimMulgyeolB = localFont({
  src: './HakgyoansimMulgyeolB.woff2',
  display: 'swap',
  variable: '--font-hakgoansimMulgyeolB',
  fallback: ['Apple Apple SD Gothic Neo', 'Noto Sans KR'],
});

export const caniculeDisplayB = localFont({
  src: './CaniculeDisplayv0.1-Bold.Trial.woff2',
  display: 'swap',
  variable: '--font-caniculeDisplayB',
  fallback: ['Apple Apple SD Gothic Neo', 'Noto Sans KR'],
});
