import { type HTMLAttributes, type ReactNode, createElement, forwardRef } from 'react';
import { clsx } from 'clsx/lite';
import * as styles from './Typo.css';
import type { TypoVariants } from './Typo.css';

export interface TypBaseProps extends HTMLAttributes<HTMLElement> {
  /** Text 에서 사용할 html tag */
  as?: keyof HTMLElementTagNameMap;
  children?: ReactNode;
}

const TypoBase = forwardRef<HTMLElement, TypBaseProps>(
  ({ as = 'span', children, ...rest }, ref) => {
    return createElement(
      as,
      {
        ref,
        ...rest,
      },
      children
    );
  }
);

TypoBase.displayName = 'TextBase';

export interface TypoProps extends TypBaseProps {
  /** Text 색상 */
  color?: NonNullable<TypoVariants>['color'];
  /** Text 종류 */
  variant?: NonNullable<TypoVariants>['variant'];
  /** Text 크기 */
  size?: NonNullable<TypoVariants>['size'];
  /** Text wrap 여부 */
  wrap?: NonNullable<TypoVariants>['wrap'];
  /** Text 말줄임할 line 갯수, wrap(false) 일 때 사용 */
  lines?: NonNullable<TypoVariants>['lines'];
}

/**
 * Typo 컴포넌트
 * - `subTitle` 의 경우 폰트 특성상 말줄임표가 표시되지 않습니다.
 * */
export const Typo = forwardRef<HTMLElement, TypoProps>(
  (
    {
      color = 'text_01',
      variant = 'text_regular',
      size = 18,
      wrap = true,
      lines = 1,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <TypoBase
        ref={ref}
        className={clsx(styles.typoCss({ color, variant, size, wrap, lines }), className)}
        {...rest}
      />
    );
  }
);

Typo.displayName = 'Typo';

export default Typo;
