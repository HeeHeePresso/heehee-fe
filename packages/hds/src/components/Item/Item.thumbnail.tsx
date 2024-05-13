import React from 'react';
import { clsx } from 'clsx/lite';
import Image from '@/components/Image';
import * as styles from './Item.thumbnail.css';

const ItemThumbnail = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...rest }, ref) => {
    return (
      <Image
        ref={ref}
        width={100}
        height={100}
        className={clsx(styles.imageCss, className)}
        {...rest}
      />
    );
  }
);

// todo: Image 컴포넌트로 이미지 태그 부분 대체

ItemThumbnail.displayName = 'ItemThumbnail';

export default ItemThumbnail;
