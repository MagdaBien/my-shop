import { useSelector } from 'react-redux';
import styles from './BasketWidget.module.scss';
import { howManyProducts } from '../../../redux/ordersRedux';

const BasketWidget = () => {
  const basketProductAmount = useSelector(howManyProducts);

  return (
    <div className={styles.light}>
      Basket
      <span className="fa fa-shopping-cart p-2" />({basketProductAmount}{' '}
      products)
    </div>
  );
};

export default BasketWidget;
