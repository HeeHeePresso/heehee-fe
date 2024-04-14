import React from 'react';
import { clsx } from 'clsx/lite';
import * as styles from './Item.thumbnail.css';

const ItemThumbnail = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...rest }, ref) => {
    return (
      <img
        ref={ref}
        width={100}
        height={100}
        className={clsx(styles.imageCss, className)}
        onError={e => {
          (e.target as HTMLImageElement).src =
            'https://github.com/HeeHeePresso/heehee-fe/assets/23569208/9486b5d5-1232-4ba4-8118-0ea57ebacbab';
        }}
        {...rest}
      />
    );
  }
);

// todo: Image 컴포넌트로 이미지 태그 부분 대체

ItemThumbnail.displayName = 'ItemThumbnail';

export default ItemThumbnail;
