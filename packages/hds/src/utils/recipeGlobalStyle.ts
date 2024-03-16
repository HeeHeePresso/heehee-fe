import { type GlobalStyleRule, globalStyle } from '@vanilla-extract/css';

/**
 *
 * ### recipe 과 함께 사용하는 global Style
 * @description recipe 의 특정 variant 와 일치할 때에 recipe 의 target 하위의 엘리먼트를 세렉트하여 스타일링을 하게 하는 유틸 함수
 *
 * @example
 * const iconCss = recipe({
 *   variants: {
 *     color: {
 *       'main-01': {},
 *       'main-02': {},
 *     },
 *     name: {
 *       tom: {},
 *       jery: {},
 *     },
 *   },
 * });
 *
 * recipeGlobalStyle(iconCss({ color: 'main-01', name: 'tom' }), 'path', { fill: 'tomato' });
 * // 아래와 같이 변환
 * // .color_main-01, .name_tom path {fill: 'tomato'}
 *
 * @param recipeSelector recipe 의 셀렉터
 * @param selector recipe과 함께 사용할 selector
 * @param rule css 스타일
 */
const recipeGlobalStyle = (recipeSelector: string, selector: string, rule: GlobalStyleRule) => {
  const parent = recipeSelector.split(' ').join(',');
  globalStyle(`${parent} ${selector}`, rule);
};

export default recipeGlobalStyle;
