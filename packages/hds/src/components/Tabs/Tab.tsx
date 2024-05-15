import { forwardRef } from 'react';
import Link from '@/components/Link';
import * as styles from '@/components/Tabs/Tab.css';
import Typo from '@/components/Typo';
import type { TabVariants } from '@/components/Tabs/Tab.css';

interface TabProps extends React.ComponentPropsWithoutRef<typeof Link> {
  /** 활성화 여부 */
  isActive?: NonNullable<TabVariants>['isActive'];
  /** 탭의 레이블 */
  children: string;
  /** 탭의 value */
  value: string;
}

/**
 * 메뉴 바에 사용되는 `Tab`
 * `Tabs` 와 함께 사용
 *
 * 최소 너비 60px
 * */
const Tab = forwardRef<HTMLAnchorElement, TabProps>(
  ({ isActive = false, children, ...rest }, ref) => {
    return (
      <Link ref={ref} scale="sm" {...rest}>
        <Typo
          className={styles.tabCss({ isActive })}
          variant={isActive ? 'text_bold' : 'text_regular'}
          color={isActive ? 'text_01' : 'text_02'}
        >
          {children}
        </Typo>
      </Link>
    );
  }
);

Tab.displayName = 'Tab';

export default Tab;
