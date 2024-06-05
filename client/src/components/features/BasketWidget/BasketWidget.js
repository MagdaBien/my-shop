import { useSelector } from 'react-redux';
import styles from './BasketWidget.module.scss';
import { getAllOrders } from '../../../redux/ordersRedux';

const BasketWidget = () => {
  const basketProducts = useSelector(getAllOrders);
  let basketProductAmount = 0;
  if (basketProducts) {
    basketProductAmount = basketProducts.length;
  }

  return (
    <div className={styles.light}>
      Basket
      <span className="fa fa-shopping-cart p-2" />({basketProductAmount}{' '}
      products)
    </div>
  );
};

export default BasketWidget;
