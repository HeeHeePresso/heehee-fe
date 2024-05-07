'use client';
import React from 'react';
import type {
  SwiperProps as RSwiperProps,
  SwiperSlideProps as RSwiperSlideProps,
} from 'swiper/react';

interface SwiperProps extends RSwiperProps {
  children?: React.ReactNode;
}

/**
 * Swiper Element 를
 * `react`에서 사용하게끔하는 리액트 래핑 컴포넌트
 * */
const SwiperRoot = ({ children, ...rest }: SwiperProps) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  React.useEffect(() => {
    if (!swiperRef?.current) {
      return;
    }

    Object.assign(swiperRef.current, rest);

    swiperRef.current.initialize?.();
  }, [rest]);

  return (
    <swiper-container init={false} threshold={20} ref={swiperRef}>
      {children}
    </swiper-container>
  );
};

interface SwiperSlideProps extends RSwiperSlideProps {
  children?: React.ReactNode;
}

/**
 * SwiperSlide Element 를
 * `react`에서 사용하게끔하는 리액트 래핑 컴포넌트
 * */
const SwiperSlide = ({ children, ...rest }: SwiperSlideProps) => {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
};

const Swiper = Object.assign(SwiperRoot, {
  Slide: SwiperSlide,
});

export default Swiper;
