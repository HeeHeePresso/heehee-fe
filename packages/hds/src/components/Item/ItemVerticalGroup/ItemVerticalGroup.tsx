import React from 'react';
import { clsx } from 'clsx/lite';
import Typo from '@/components/Typo';
import * as styles from './ItemVerticalGroup.css';

interface ItemVerticalGroup extends React.HTMLAttributes<HTMLElement> {
  title: string;
  titleLang?: 'en' | 'kr';
}

const ItemVerticalGroup = React.forwardRef<HTMLElement, ItemVerticalGroup>(
  ({ title, titleLang = 'en', className, children, ...rest }, ref) => {
    return (
      <section ref={ref} className={clsx(styles.rootCss, className)} {...rest}>
        <Typo
          variant={titleLang === 'en' ? 'subtitle' : 'text_regular'}
          size={titleLang === 'en' ? 24 : 18}
          color="text_01"
          as="h3"
        >
          {title}
        </Typo>
        <>{children}</>
      </section>
    );
  }
);

ItemVerticalGroup.displayName = 'ItemVerticalGroup';

export default ItemVerticalGroup;
