import React from 'react';
import { clsx } from 'clsx/lite';
import * as styles from './TopNav.root.css';
import type { RootVariants } from './TopNav.root.css';

interface TopNavRootProps extends React.HTMLAttributes<HTMLElement> {
  /** topNav 사이즈 */
  size?: NonNullable<RootVariants>['size'];
  /** topNav boxShadow 표시여부 */
  hasShadow?: boolean;
}

const TopNavRoot = React.forwardRef<HTMLElement, TopNavRootProps>(
  ({ size = 'md', hasShadow = false, className, children, ...rest }, ref) => {
    return (
      <nav ref={ref} className={clsx(styles.rootCss({ size, hasShadow }), className)} {...rest}>
        <div className={styles.innerCss}>{children}</div>
      </nav>
    );
  }
);

TopNavRoot.displayName = 'BottomNavRoot';

export default TopNavRoot;
