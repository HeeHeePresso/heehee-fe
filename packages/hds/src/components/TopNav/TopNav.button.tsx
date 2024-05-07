import React from 'react';
import { clsx } from 'clsx';
import Button from '@/components/Button';
import Icon from '../Icon';
import * as styles from './TopNav.buttton.css';
import type { IconVariants } from '@/components/Icon/Icon.css';

interface TopNavButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, 'children' | 'type'> {
  /** 아이콘 이름 */
  icon: React.ComponentPropsWithoutRef<typeof Icon>['icon'];
  /** 아이콘 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** icon 전체 path 의 색상 */
  fill?: NonNullable<IconVariants>['fill'];
}

const TopNavButton = React.forwardRef<HTMLButtonElement, TopNavButtonProps>(
  ({ icon, size = 'lg', fill = 'text_01', className, ...rest }, ref) => {
    return (
      <Button type="button" ref={ref} className={clsx(styles.rootCss, className)} {...rest}>
        <Icon icon={icon} size={ICON_SIZE[size]} fill={fill} />
      </Button>
    );
  }
);

const ICON_SIZE = {
  sm: 24,
  md: 28,
  lg: 36,
} as const;

TopNavButton.displayName = 'TopNavButton';

export default TopNavButton;
