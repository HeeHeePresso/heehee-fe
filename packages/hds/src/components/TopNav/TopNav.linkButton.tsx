import React from 'react';
import { clsx } from 'clsx';
import Icon from '@/components/Icon';
import Link from '@/components/Link';
import * as styles from './TopNav.buttton.css';
import type { IconVariants } from '@/components/Icon/Icon.css';

interface TopNavLinkButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'children' | 'scale'> {
  /** 아이콘 이름 */
  icon: React.ComponentPropsWithoutRef<typeof Icon>['icon'];
  /** 아이콘 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** icon 전체 path 의 색상 */
  fill?: NonNullable<IconVariants>['fill'];
}

const TopNavLinkButton = React.forwardRef<HTMLAnchorElement, TopNavLinkButtonProps>(
  ({ icon, size = 'lg', fill = 'text_01', className, ...rest }, ref) => {
    return (
      <Link ref={ref} scale="md" className={clsx(styles.rootCss, className)} {...rest}>
        <Icon icon={icon} size={ICON_SIZE[size]} fill={fill} />
      </Link>
    );
  }
);

const ICON_SIZE = {
  sm: 24,
  md: 28,
  lg: 36,
} as const;

TopNavLinkButton.displayName = 'TopNavLinkButton';

export default TopNavLinkButton;
