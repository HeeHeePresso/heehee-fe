import React, { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx/lite';
import Image from '@/components/Image';
import * as styles from './Item.thumbnail.css';

const ItemThumbnail = React.forwardRef<
  HTMLImageElement,
  Omit<ComponentPropsWithoutRef<typeof Image>, 'width' | 'height'>
>(({ className, ...rest }, ref) => {
  return (
    <Image
      ref={ref}
      width={100}
      height={100}
      className={clsx(styles.imageCss, className)}
      {...rest}
    />
  );
});

ItemThumbnail.displayName = 'ItemThumbnail';

export default ItemThumbnail;
