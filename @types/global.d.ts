import type React from 'react';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
import type { Swiper } from "swiper/types";
import type {SetupWorker} from "msw/browser";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperProps,
                HTMLElement
            >;
            "swiper-slide": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
                HTMLElement
            >;
        }
    }

    interface Window {
        worker: SetupWorker;
    }

    type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

    type ValueOf<T> = T[keyof T];

    /** Merge props without conflicts of the key (global)*/
    type ExtendableProps<Extended, Overrides> = Overrides & Omit<Extended, keyof Overrides>;

    /** Omit certain keys from the ComponentPropsWithoutRef */
    type ComponentPropsWithoutRefAndKeys<
        E extends React.ElementType,
        K extends keyof React.ComponentPropsWithoutRef<E>,
    > = Omit<React.ComponentPropsWithoutRef<E>, K>;
}
export {};
