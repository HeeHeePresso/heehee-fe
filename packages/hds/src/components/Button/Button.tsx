import React from 'react';
import { clsx } from 'clsx';
import * as styles from '@/components/Button/Button.css';
import { type ClickableActionVariants, clickableActionCss } from '@/styles/clickable.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 터치 액션 스케일 값 */
  scale?: NonNullable<ClickableActionVariants>['scale'];
  /** 버튼 사용 여부 */
  disabled?: boolean;
}

/**
 *  버튼 컴포넌트 (유틸성)
 * - disabled 케이스 대응
 * */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ scale = 'md', disabled = false, className: propsClassName, onClick, ...rest }, ref) => {
    const className = clsx(clickableActionCss({ scale }), styles.buttonCss, propsClassName);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        className={className}
        onClick={onClickHandler}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
