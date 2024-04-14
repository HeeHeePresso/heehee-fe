import React from 'react';
import { clsx } from 'clsx/lite';
import * as styles from './Bottomnav.root.css';

interface BottomNavRootProps extends React.HTMLAttributes<HTMLElement> {
  /** 선택한 바텀Nav 버튼의 index */
  selected: number;
  /** 선택한 바텀 Nav 값을 변경하는 함수 */
  onSelected: (selected: number) => void;
}

const BottomNavRoot = React.forwardRef<HTMLElement, BottomNavRootProps>(
  ({ selected, className, children, onSelected, onClick, ...rest }, ref) => {
    if (!React.isValidElement(children) && React.Children.count(children) <= 0) {
      return null;
    }

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, idx: number) => {
      onSelected(idx);
      onClick?.(e);
    };

    return (
      <nav ref={ref} className={clsx(styles.rootCss, className)} {...rest}>
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          return React.cloneElement(child, {
            // @ts-ignore
            selected: selected === idx,
            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
              onClickHandler(e, idx);
            },
          });
        })}
      </nav>
    );
  }
);

BottomNavRoot.displayName = 'BottomNavRoot';

export default BottomNavRoot;
