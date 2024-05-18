import Button from '../Button';
import Icon from '../Icon';
import * as styles from './CartIcon.css';

const CartIcon = () => {
  return (
    <div className={styles.CartIcon}>
      <Button>
        <Icon icon="icon_basket_outline" size={33} fill="background" />
      </Button>
    </div>
  );
};
export default CartIcon;
