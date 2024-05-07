import { clsx } from 'clsx/lite';
import * as styles from './Splash.css';

/** 앱의 스플래시 화면 */
const Splash = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(styles.splashBoxCss, className)}>
      <strong className={styles.logoCss}>
        Hee Hee <br />
        presso
      </strong>
    </div>
  );
};

export default Splash;
