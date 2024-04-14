'use client';
import React from 'react';
import { register } from 'swiper/element/bundle';
import Swiper from '@/components/Swiper';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

interface CarouselProps<S extends object | string> extends SwiperProps {
  type?: 'horizontal' | 'loop';
  /** 반복될 Slide 배열 */
  slides?: S[];
  /** 렌더될 슬라이드 내부의 리액트 컴포넌트 */
  renderSlide: (i: S) => React.ReactNode;
  /** 슬라이드가 반복될 때 사용할 키 이름 */
  keyName?: keyof S;
  /** swiper slide 의 props */
  swiperSlideProps?: SwiperSlideProps;
}

/**
 * 캐로셀
 * - slides 가 0 개일 때는 컴포넌트 표시 X
 * - 가로형
 *
 * @example
 * <HorizontalCarousel2<Type , KeyName>
 *    slides={[{ itemId: 'hello', src: '', name: '', price: 20 }]}
 *    keyName="itemId"
 *    renderSlide={props => {
 *       return (
 *         <a>
 *           <Card src={props.src} title={props.name} subTitle={`${getKrPrice(props.price)}원`} />
 *         </a>
 *       );
 *     }}
 * />
 * - Type: slides 의 타입, 명시하지 않으면 slides 로 전달한 배열이 타입으로 지정된다.
 * - KeyName: 반복분의 key 로 지정할 객체의 키 이름, keyName 을 지정하지 않으면 index 가 키가 된다.
 * */
const Carousel = <S extends object | string, Key extends React.Key = number>({
  type = 'horizontal',
  keyName,
  slides = [],
  renderSlide,
  swiperSlideProps,
  ...rest
}: CarouselProps<S>) => {
  const isLoopFeature = slides.length <= 1;

  const swiperProps =
    type === 'horizontal'
      ? HORIZONTAL_OPTIONS
      : {
          ...LOOP_OPTIONS,
          ...(!isLoopFeature && {
            loop: false,
            autoPlay: false,
          }),
        };

  React.useEffect(() => {
    register();
  }, []);

  if (slides.length <= 0) {
    return null;
  }

  return (
    <Swiper {...swiperProps} {...rest}>
      {slides.map((s, index) => (
        <Swiper.Slide
          key={(keyName ? s[keyName] : index) as Key}
          style={{ width: 'fit-content' }}
          {...swiperSlideProps}
          lazy={index > 3}
        >
          {renderSlide(s)}
        </Swiper.Slide>
      ))}
    </Swiper>
  );
};

const HORIZONTAL_OPTIONS: SwiperProps = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 20,
  freeMode: { enabled: true, sticky: true },
  loop: false,
};

const LOOP_OPTIONS: SwiperProps = {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 0,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 2000,
    disableOnInteraction: false,
  },
};

export default Carousel;
