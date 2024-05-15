import { Children, cloneElement } from 'react';
import Swiper from '@/components/Swiper';
import Tab from '@/components/Tabs/Tab';
import * as styles from './Tabs.css';
import type { SwiperProps } from 'swiper/react';

interface TabsProps {
  children?: React.ReactNode;
  /** value 는 onClick 에 setState를 사용하여 변경 (예시 참고) */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, newValue: string) => void;
  /** 선택된 tab의 value */
  value: string;
}

const TabsRoot = ({ value, children, onClick }: TabsProps) => {
  if (!Array.isArray(children) || typeof children === 'undefined') {
    return null;
  }

  return (
    <Swiper className={styles.rootCSS} {...SWIPER_OPTIONS}>
      {Children.map(children, child => {
        return (
          <Swiper.Slide style={{ width: 'fit-content' }}>
            {cloneElement(child, {
              isActive: child.props.value === value,
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                onClick?.(e, child.props.value);
              },
            })}
          </Swiper.Slide>
        );
      })}
    </Swiper>
  );
};

/**
 * 메뉴바
 * */
const Tabs = Object.assign(TabsRoot, { Tab: Tab });

const SWIPER_OPTIONS: SwiperProps = {
  slidesPerView: 'auto',
  spaceBetween: 20,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  loop: false,
};

export default Tabs;
