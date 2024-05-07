'use client';
import Button from '@/components/Button';
import TopNav from '@/components/TopNav';
import { ApiError } from '@/libs/axios/axios';
import Typo from '@hehe/hds/components/Typo';
import * as styles from './error.css';

interface ErrorProps {
  error: (Error & { digest?: string }) | ApiError;
  reset: () => void;
}

interface ErrorDisplayProps {
  type: 'API' | 'JS';
  reason?: number | string;
  desc?: string;
  reset: () => void;
}

const ErrorDisplay = (props: ErrorDisplayProps) => {
  return (
    <section className={styles.rootCss}>
      <Typo variant="text_bold" size={24} as="h3">
        {props.type} 에러
      </Typo>
      {(props.desc || typeof props.reason === 'number') && (
        <Typo className={styles.desc} variant="small_regular" size={14} as="p" color="text_02">
          {typeof props.reason !== 'undefined' && `[${props.reason}]: `}
          {props.desc}
        </Typo>
      )}
      <div className={styles.btnWrapper}>
        <Button
          className={styles.btn({ variant: 'primary' })}
          type="button"
          onClick={() => props.reset()}
        >
          재시도하기
        </Button>
        <Button
          className={styles.btn({ variant: 'secondary' })}
          type="button"
          onClick={() => window.location.reload()}
        >
          새로고침하기
        </Button>
      </div>
    </section>
  );
};

const Error = ({ error, reset }: ErrorProps) => {
  const isApiError = error instanceof ApiError;

  return (
    <>
      <TopNav hasShadow>
        <TopNav.Title>Error</TopNav.Title>
      </TopNav>
      {isApiError ? (
        <ErrorDisplay type="API" reason={error?.code} desc={error?.message} reset={reset} />
      ) : (
        <ErrorDisplay type="JS" reason={error?.name} desc={error?.message} reset={reset} />
      )}
    </>
  );
};

export default Error;
