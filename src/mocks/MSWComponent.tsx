'use client';
import { useEffect, useState } from 'react';
import Splash from '@hehe/hds/components/Splash';

const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  const isMock = process.env.NODE_ENV === 'development' && !!process.env.NEXT_PUBLIC_MOCK;

  useEffect(() => {
    if (!isMock || mswReady) {
      return;
    }

    (async () => {
      const { default: initMsw } = await import('./initMsw');
      await initMsw();
      setMswReady(true);
    })();
  }, [isMock, mswReady, setMswReady]);

  if (isMock && !mswReady) {
    return <Splash />;
  }

  return <>{children}</>;
};

export default MSWComponent;
