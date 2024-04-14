import React from 'react';
import Icon from '@/components/Icon';
import Link from '@/components/Link';
import Typo from '@/components/Typo';
import * as styles from './Bottomnav.button.css';

interface BottomNavButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'children' | 'scale'> {
  /** 아이콘 이름 */
  icon: React.ComponentPropsWithoutRef<typeof Icon>['icon'];
  /** 버튼 레이블 */
  label: string;
}

const BottomNavButton = React.forwardRef<HTMLAnchorElement, BottomNavButtonProps>(
  (
    {
      icon,
      label,
      // @ts-ignore 항상 BottomNavRoot 에서 주입하기 때문에 ts ignore 처리
      selected,
      ...rest
    },
    ref
  ) => {
    /** 스토리북 next/router 관련 addon next14 버전 호환성이 되지 않아 pathname 을 알 수 없기 때문에 방어코드 처리함 */

    return (
      <Link ref={ref} scale="md" className={styles.rootCss} {...rest}>
        <Icon icon={icon} size={36} fill={selected ? 'main_01' : 'text_01'} />
        <Typo variant="small_regular" size={14} color={selected ? 'main_01' : 'text_01'}>
          {label}
        </Typo>
      </Link>
    );
  }
);

BottomNavButton.displayName = 'BottomNavButton';

export default BottomNavButton;
