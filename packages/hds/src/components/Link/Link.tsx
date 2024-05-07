import React from 'react';
import { clsx } from 'clsx/lite';
import NLink from 'next/link';
import { ClickableActionVariants, clickableActionCss } from '@/styles/clickable.css';
import * as styles from './Link.css';

interface LinkProps extends Omit<React.ComponentPropsWithoutRef<typeof NLink>, 'href'> {
  /** url 링크 */
  href: string;
  /** 터치 액션 스케일 값 */
  scale?: NonNullable<ClickableActionVariants>['scale'];
  /** 링크 사용 여부 */
  disabled?: boolean;
}

/**
 *  링크 컴포넌트 (유틸성)
 * - href 타입을 string 으로 고정
 * - 외부 url 대응
 * */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, scale = 'md', disabled = false, onClick, className: propsClassName, ...rest }, ref) => {
    const className = clsx(clickableActionCss({ scale }), styles.linkCss, propsClassName);

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
      }

      onClick?.(e);
    };

    if (isExternalUrl(href)) {
      return (
        <a
          ref={ref}
          aria-disabled={disabled}
          className={className}
          href={href}
          target="_blank"
          rel="noreferrer"
          draggable={false}
          onClick={onClickHandler}
          {...rest}
        />
      );
    }

    return (
      <NLink
        ref={ref}
        href={href}
        aria-disabled={disabled}
        className={className}
        draggable={false}
        onClick={onClickHandler}
        {...rest}
      />
    );
  }
);

Link.displayName = 'Link';

const isExternalUrl = (url: string) => /^(http|https)?:\/\//.test(url);

export default Link;
