import { type HTMLAttributes, forwardRef } from 'react';
import * as styles from './Gauge.css';

export interface GaugeProps extends HTMLAttributes<HTMLDivElement> {
  /** 게이지 바 연한 컬러 */
  bgColor?: string;
  /** 게이지 컬러 */
  gauageColor?: string;
  /** 게이지에 표시할 퍼센테지 @default 0 */
  progress?: number;
}

const Gauge = forwardRef<HTMLDivElement, GaugeProps>(
  ({ bgColor, gauageColor, progress = 0, ...rest }, ref) => {
    return (
      <div
        className={styles.guageBackground}
        style={{ backgroundColor: bgColor, width: '100%' }}
        ref={ref}
        {...rest}
      >
        <div
          className={styles.guageProgress}
          style={{ backgroundColor: gauageColor, width: `calc(100% * ${progress * 0.01})` }}
          {...rest}
        />
      </div>
    );
  }
);

Gauge.displayName = 'Gauge';

export default Gauge;
