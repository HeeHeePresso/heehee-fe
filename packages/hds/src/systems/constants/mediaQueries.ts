/** 단위(px) */
export const breakPointQueries = {
  sm: 'screen and (max-width: 390px)',
  md: 'screen and (max-width: 780px)',
} as const;

/**
 * hover 모바일 버그 대응
 * - hover 가 가능한 환경에서만 hover 셀렉터를 사용
 * */
export const hoverQuery = '(hover: hover) and (pointer: fine)';
