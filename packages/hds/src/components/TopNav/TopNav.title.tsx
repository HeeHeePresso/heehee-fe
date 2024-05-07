import React from 'react';
import { clsx } from 'clsx';
import Typo from '@/components/Typo';
import * as styles from './TopNav.title.css';

export interface TopNavTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  /** topNav 제목 종류 */
  type?: 'default' | 'logo';
}

const TopNavTitle = React.forwardRef<HTMLHeadingElement, TopNavTitleProps>(
  ({ type = 'default', className, children, ...rest }, ref) => {
    if (type === 'logo') {
      return (
        <h1 ref={ref} className={clsx(styles.logoCss, className)} {...rest}>
          Hee Hee
          <br />
          presso
        </h1>
      );
    }

    return (
      <Typo
        ref={ref}
        as="h1"
        variant="header"
        size={24}
        wrap={false}
        lines={1}
        className={clsx(styles.titleCss, className)}
        {...rest}
      >
        {children}
      </Typo>
    );
  }
);

TopNavTitle.displayName = 'TopNav';

export default TopNavTitle;
