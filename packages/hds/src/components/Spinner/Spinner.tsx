import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'clsx/lite';
import Image from 'next/image';
import spinner from '@/systems/images/spinner.png';
import * as styles from './Spinner.css';

interface SpinnerProps
  extends Omit<ComponentPropsWithoutRef<typeof Image>, 'width' | 'height' | 'src' | 'alt'> {
  /** 스피너의 사이즈 */
  size?: number;
}

const Spinner = forwardRef<HTMLImageElement, SpinnerProps>(
  ({ size = 40, className, ...rest }, ref) => {
    return (
      <Image
        ref={ref}
        className={clsx(styles.rootCss, className)}
        src={spinner}
        width={size}
        height={size}
        alt="spinner"
        {...rest}
      />
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
