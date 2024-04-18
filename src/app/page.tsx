'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import BottomNavUser from '@/components/BottomNav/BottomNavUser';
import HomeTopNav from '@/containers/home/HomeTopNav';
import FullScreenLoader from '@hehe/hds/components/FullScreenLoader';
import ScrollView from '@hehe/hds/components/ScrollView';
import * as styles from './page.css';

const HomeContents = dynamic(() => import('@/containers/home/HomeContents'), { ssr: false });

export default function Home() {
  return (
    <>
      <HomeTopNav />
      <Suspense
        fallback={
          <ScrollView isFullPage>
            <FullScreenLoader />
          </ScrollView>
        }
      >
        <ScrollView className={styles.pageCss}>
          <HomeContents />
        </ScrollView>
      </Suspense>
      <BottomNavUser />
    </>
  );
}
