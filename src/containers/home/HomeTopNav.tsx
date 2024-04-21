'use client';
import { TopNav } from '@hehe/hds/components';
import * as styles from './homeTopNav.css';

const HomeTopNav = () => {
  return (
    <TopNav className={styles.rootCss}>
      <TopNav.Spacing />
      <TopNav.Title type="logo" />
      <TopNav.LinkBtn href="/cart" icon="icon_basket_outline" fill="main_01" />
    </TopNav>
  );
};

export default HomeTopNav;
