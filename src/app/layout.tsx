import { ToastContainer } from 'react-toastify';
import { Splash } from '@/components';
import { htmlIds } from '@/constants/htmlIds';
import ReactQueryProvider from '@/libs/react-query/ReactQueryProvider';
import MSWComponent from '@/mocks/MSWComponent';
import {
  DMSerifDisplay,
  caniculeDisplayB,
  hakgoansimMulgyeolB,
  pretendard,
} from '@hehe/hds/systems';
import * as styles from './layout.css';
import type { Metadata } from 'next';
import '@hehe/hds/styles/reset.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: '희희 프레소',
  description: '맛있는 커피와 함께해요',
};

const fontVars = [
  hakgoansimMulgyeolB.variable,
  pretendard.variable,
  DMSerifDisplay.variable,
  caniculeDisplayB.variable,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={fontVars.join(' ')}>
      <body>
        <div id={htmlIds.templateRoot} className={styles.templateCss}>
          <section id={htmlIds.templateLeft} className={styles.templateLeftCss}>
            <Splash />
          </section>
          <section id={htmlIds.templateRight} className={styles.templateRightCss}>
            <MSWComponent>
              <ReactQueryProvider>
                <ToastContainer />
                {children}
              </ReactQueryProvider>
            </MSWComponent>
          </section>
        </div>
      </body>
    </html>
  );
}
