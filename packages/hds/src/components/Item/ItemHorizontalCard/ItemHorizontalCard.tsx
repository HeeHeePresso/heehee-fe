import React from 'react';
import { clsx } from 'clsx';
import { ItemThumbnail } from '@/components/Item';
import Link from '@/components/Link';
import Typo from '@/components/Typo';
import * as styles from './ItemHorizontalCard.css';

export interface ItemHorizontalCardProps extends React.ComponentPropsWithoutRef<typeof Link> {
  /** 썸네일 이미지 url */
  src: string;
  /** 제목*/
  title?: string;
  /** 부제목 */
  subTitle?: string;
  /** 내용 */
  content?: string;
}

/** 가로형 상품 카드 */
const ItemHorizontalCard = React.forwardRef<HTMLAnchorElement, ItemHorizontalCardProps>(
  ({ src, title, subTitle, content, className, ...rest }, ref) => {
    return (
      <Link ref={ref} className={clsx(styles.rootCss, className)} {...rest}>
        <ItemThumbnail src={src} alt={title || ''} />
        <div className={styles.bodyCss}>
          <div className={styles.titleWrapperCss}>
            <Typo variant="text_regular" size={18} color="text_01" as="strong">
              {title}
            </Typo>
            <Typo variant="small_regular" size={14} color="text_02" as="p">
              {subTitle}
            </Typo>
          </div>
          <Typo variant="text_bold" size={18} color="text_01" as="p">
            {content}
          </Typo>
        </div>
      </Link>
    );
  }
);

ItemHorizontalCard.displayName = 'ItemHorizontalCard';

export default ItemHorizontalCard;
