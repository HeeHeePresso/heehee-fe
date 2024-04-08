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
/** 컴포넌트 설명을 여기에 작성합니다. doc 이 제대로 생성되지 않는다면 named export 해주세요 */
const Gauge = forwardRef<HTMLDivElement, GaugeProps>(
  ({ bgColor, gauageColor, progress = 0, ...rest }, ref) => {
    return (
      <div className={styles.guageCss} ref={ref}>
        <div className={`${styles.guageBar}`} style={{ backgroundColor: bgColor }} {...rest} />
        <div
          className={`${styles.guageBar}`}
          style={{ backgroundColor: gauageColor, width: `calc(350px * ${progress * 0.01})` }}
          {...rest}
        ></div>
      </div>
    );
  }
);

Gauge.displayName = 'Gauge';

export default Gauge;
