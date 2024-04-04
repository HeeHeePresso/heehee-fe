import {  HTMLAttributes, forwardRef } from 'react';
import Gauge, { GaugeProps } from '../Gauge/Gauge';

export interface GauageStepsProps extends GaugeProps, HTMLAttributes<HTMLDivElement>{
  /** 스탭 이름 */
  steps: string[]
}
/** 컴포넌트 설명을 여기에 작성합니다. doc 이 제대로 생성되지 않는다면 named export 해주세요 */
const GaugeSteps = forwardRef<HTMLDivElement, GauageStepsProps>(({ steps, ...rest }, ref) => {
  return (
    <>
    <Gauge {...rest}/></>
    
  );
});

GaugeSteps.displayName = 'GaugeSteps';

export default GaugeSteps;
