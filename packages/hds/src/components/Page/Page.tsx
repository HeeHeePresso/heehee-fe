import React from 'react';
import { clsx } from 'clsx';
import * as styles from './Page.css';
import type { RootVariants } from './Page.css';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 배경색 */
  backgroundColor?: NonNullable<RootVariants>['backgroundColor'];
}

/** 배경색을 추가해야하는 경우 page.tsx 를 Page 컴포넌트로 감싸줍니다. */
const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ backgroundColor = 'background', className, ...rest }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.rootCSs({ backgroundColor }), className)} {...rest} />
    );
  }
);

Page.displayName = 'Page';

export default Page;
