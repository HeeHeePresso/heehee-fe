import React from 'react';
import { clsx } from 'clsx';
import { fixedSize } from '@/systems/constants/fixedSize';
import * as styles from './ScrollView.css';

interface ScrollBoxProps extends React.HTMLAttributes<HTMLElement> {
  topSpacing?: number;
  bottomSpacing?: number;
  isFullPage?: boolean;
}

/**
 * 콘텐츠의 길이가 짧을 때는 FullHeight,
 * 길이가 길 때는 스크롤을 보여주는 래퍼
 *
 * - 사용하는 topNav, bottomNav 등 위아래로 고정되는 Element 의 height 를 props 로 전달하여 사용
 * */
const ScrollView = React.forwardRef<HTMLElement, ScrollBoxProps>(
  (
    {
      topSpacing = fixedSize.topNav.md.height,
      bottomSpacing = fixedSize.bottomNav.height,
      isFullPage = false,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <main
        ref={ref}
        className={clsx(styles.rootCss, className)}
        style={{
          minHeight: `calc(100% - ${topSpacing}px - ${bottomSpacing}px )`,
          height: isFullPage ? `calc(100% - ${topSpacing}px - ${bottomSpacing}px )` : 'auto',
        }}
        {...rest}
      />
    );
  }
);

ScrollView.displayName = 'ScrollView';

export default ScrollView;
