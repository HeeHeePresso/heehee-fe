import { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import NImage from 'next/image';
import noImage from '@/systems/images/noImage.png';
import * as styles from './Image.css';
import type { RatioVariants } from './Image.css';

interface ImageProps extends React.ComponentPropsWithoutRef<typeof NImage> {
  /** 이미지의 비율 */
  ratio?: NonNullable<RatioVariants>['ratio'];
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ratio, width, height, style, className, onError, ...rest }, ref) => {
    const [errorSrc, setErrorSrc] = useState('');

    const onErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setErrorSrc(noImage.src);
      onError?.(e);
    };

    const imageSrc = errorSrc || src;

    if (!ratio) {
      return (
        <NImage
          src={imageSrc}
          className={clsx(styles.imageStyle, className)}
          width={width}
          height={height}
          style={{ width, height, ...style }}
          {...rest}
        />
      );
    }

    return (
      <NImage
        ref={ref}
        src={imageSrc}
        width={width}
        height={height}
        className={clsx(styles.ratioCss({ ratio }), styles.imageStyle, className)}
        style={style}
        onError={onErrorHandler}
        {...rest}
      />
    );
  }
);

Image.displayName = 'Image';

export default Image;
