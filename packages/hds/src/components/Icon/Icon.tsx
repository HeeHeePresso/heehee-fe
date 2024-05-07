import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'clsx/lite';
import * as styles from '@/components/Icon/Icon.css';
import * as icons from '@/systems/icons';
import type { IconVariants } from '@/components/Icon/Icon.css';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  /** icon 이름 */
  icon: keyof typeof icons;
  /** icon 크기 (가로 세로 동일) */
  size?: number;
  /** icon 전체 path 의 색상 */
  fill?: NonNullable<IconVariants>['fill'];
}

/** icon 을 name 으로 사용할 수 있게 하는 아이콘 컨테이너 컴포넌트 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, size = 20, fill = 'text_01', className = '', style, ...rest }, ref) => {
    const IconComponent = icons[icon];

    return (
      <IconComponent
        ref={ref}
        width={size}
        height={size}
        className={clsx(styles.iconCss({ fill }), className)}
        style={{ width: size, height: size, ...style }}
        {...rest}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
