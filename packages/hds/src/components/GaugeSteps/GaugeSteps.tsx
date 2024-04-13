import { forwardRef } from 'react';
import Gauge, { GaugeProps } from '../Gauge/Gauge';
import Typo from '../Typo';
import { guageStepsCss, guageStepsNames } from './GaugeStep.css';

export interface GauageStepsProps extends GaugeProps {
  /** 스탭 이름 */
  steps: string[];
}

const GaugeSteps = forwardRef<HTMLDivElement, GauageStepsProps>(({ steps, ...rest }, ref) => {
  return (
    <div className={guageStepsCss} ref={ref}>
      <div className={guageStepsNames}>
        {steps.map(val => {
          return (
            <Typo color="text_02" lines={1} size={14} variant="text_regular">
              {val}
            </Typo>
          );
        })}
      </div>
      <Gauge {...rest} />
    </div>
  );
});

GaugeSteps.displayName = 'GaugeSteps';

export default GaugeSteps;
