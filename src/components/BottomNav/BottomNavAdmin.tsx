'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import BottomNav from '@/components/BottomNav';
import * as styles from './BottomNav.css';

/** 직원용 bottomNav */
const BottomNavAdmin = () => {
  const pathname = usePathname();
  // 다른 케이스가 이 프로젝트에는 존재하지 않아 기본 === 로 비교함
  const currentIndex = BUTTONS.findIndex(({ href }) => href === pathname);
  const [selected, setSelected] = useState(Math.max(currentIndex, 0));

  return (
    <BottomNav
      className={styles.rootCss}
      selected={selected}
      onSelected={selected => {
        setSelected(selected);
      }}
    >
      {BUTTONS.map((button, idx) => {
        return <BottomNav.Btn key={idx} {...button} />;
      })}
    </BottomNav>
  );
};

const BUTTONS: React.ComponentPropsWithoutRef<typeof BottomNav.Btn>[] = [
  { href: '/home', icon: 'icon_home', label: '홈' },
  { href: '/orders', icon: 'icon_member', label: '메뉴수정' },
  { href: '/order', icon: 'icon_coffee', label: '주문내역' },
  { href: '/setting', icon: 'icon_more', label: '더보기' },
];

export default BottomNavAdmin;
