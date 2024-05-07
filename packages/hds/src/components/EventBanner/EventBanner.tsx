'use client';
import { clsx } from 'clsx';
import Carousel from '@/components/Carousel';
import globalVars from '@/styles/globalVars.css';
import * as styles from './EventBanner.css';

interface EventBannerProps {
  slides?: string[];
  className?: string;
}

const EventBanner = ({ slides = [], className }: EventBannerProps) => {
  return (
    <Carousel<string>
      className={clsx(styles.rootCss, className)}
      type="loop"
      slides={slides}
      renderSlide={src => <img src={src} className={styles.imageCss} />}
      pagination={
        slides.length > 1
          ? {
              type: 'bullets',
              clickable: true,
            }
          : false
      }
      injectStyles={[
        `
         .swiper-pagination-bullets {
          position: absolute;
          left: 0;
          bottom: 19px !important;
          display: inline-flex;
          justify-content: center;
          width: 100%;
          gap: 8px;
          z-index: ${globalVars.zIndex.swiper.pagination};
         }
          
        .swiper-pagination-bullet {
          width: 10px;
          height: 4px;
          border-radius: 60px;
          border: 1px solid ${globalVars.color.background};
          cursor: pointer;
          background-color: transparent;
        }

        .swiper-pagination-bullet-active {
          background: ${globalVars.color.background};
        }
        `,
      ]}
      swiperSlideProps={{
        style: {
          fontSize: 0,
        },
      }}
    />
  );
};

export default EventBanner;
