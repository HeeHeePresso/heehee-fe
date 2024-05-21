import clsx from 'clsx';
import * as styles from './Location.css';
import Icon from '../Icon';
import Button from '../Button';
import Typo from '../Typo';

interface LocationProps {
  text: string;
}
const Location = ({ text = '수원영통점' }: LocationProps) => {
  return (
    <div className={clsx(styles.FlexCss, styles.Container)}>
      <div className={styles.FlexCss}>
        <div className={styles.IconCss}>
          <Icon icon="icon_map_marker" size={24} />
        </div>
        <div>
          <p>
            <Typo children={text} color="text_01" size={18} variant={'text_bold'} />
            <Typo children={' 메뉴를'} color="text_02" size={18} />
          </p>
          <p>
            <Typo children={'표시 중입니다'} color="text_02" size={18} />
          </p>
        </div>
      </div>
      <Button className={styles.ButtonCss}>
        <Typo children={'변경'} variant="small_regular" size={14} color="main_01" />
      </Button>
    </div>
  );
};
export default Location;
