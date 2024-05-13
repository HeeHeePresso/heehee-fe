import React from 'react';
import { clsx } from 'clsx';
import ItemThumbnail from '@/components/Item/Item.thumbnail';
import * as styles from '@/components/Item/ItemVerticalCard/ItemVerticalCard.css';
import Link from '@/components/Link';
import Typo from '@/components/Typo';

export interface ItemVerticalCardProps extends React.ComponentPropsWithoutRef<typeof Link> {
  /** 썸네일 이미지 url */
  src: string;
  /** 제목*/
  title?: string;
  /** 부제목 */
  subTitle?: string;
}

const ItemVerticalCard = React.forwardRef<HTMLAnchorElement, ItemVerticalCardProps>(
  ({ src, title, subTitle, className, ...rest }, ref) => {
    return (
      <Link ref={ref} className={clsx(styles.rootCss, className)} scale="sm" {...rest}>
        <ItemThumbnail src={src} alt={title || ''} />
        {title && subTitle && (
          <div className={styles.infoCss}>
            <Typo
              className={styles.titleCss}
              variant="small_regular"
              size={14}
              color="text_01"
              as="strong"
            >
              {title}
            </Typo>
            <Typo
              className={styles.priceCss}
              variant="small_regular"
              size={14}
              color="text_02"
              as="p"
            >
              {subTitle}
            </Typo>
          </div>
        )}
      </Link>
    );
  }
);

ItemVerticalCard.displayName = 'ItemVerticalCard';
export default ItemVerticalCard;
