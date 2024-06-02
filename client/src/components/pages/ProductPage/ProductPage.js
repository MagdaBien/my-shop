import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  loadProductRequest,
  getProductById,
  isLoadingData,
  isDataReady,
  isErrorData,
} from '../../../redux/productsRedux';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';
import Button from 'react-bootstrap/Button';
import NumberPicker from 'react-widgets/NumberPicker';
import 'react-widgets/styles.css';
import styles from './ProductPage.module.scss';
import { useState } from 'react';
import { updateOrders, getAllOrders } from '../../../redux/ordersRedux';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const [clientInfo, setClientInfo] = useState('');

  useEffect(() => {
    dispatch(loadProductRequest(id));
  }, [dispatch]);

  const product = useSelector((state) => getProductById(state, id));
  const actualBasket = useSelector(getAllOrders);
  //console.log('actualBasket: ', actualBasket);

  // --- loading data
  const isLoading = useSelector(isLoadingData);
  const isError = useSelector(isErrorData);
  const isReady = useSelector(isDataReady);
  if (!isReady) {
    return (
      <LoadingDataInfo
        isLoading={isLoading}
        isError={isError}
      ></LoadingDataInfo>
    );
  }

  function addToBasket() {
    let basket = [...actualBasket];
    const isExistingProduct = actualBasket.find(function (element) {
      return element.productId === id;
    });
    if (isExistingProduct) {
      basket = actualBasket.map((product) =>
        product.productId === id
          ? {
              productId: id,
              amount: product.amount + amount,
              price: product.price,
            }
          : product,
      );
    } else {
      basket.push({ productId: id, amount: amount, price: product.price });
    }
    setClientInfo('Product added to your basket');
    dispatch(updateOrders(basket));
    setTimeout(() => {
      setClientInfo('');
    }, 3000);
  }

  return (
    <Container>
      Ilośc dodanych produktów: {amount}
      <h1>{product.title}</h1>
      <h2>{product.price} zł</h2>
      <p>{product.description}</p>
      <div className={styles.picker}>
        <NumberPicker
          defaultValue={amount}
          step={1}
          min={1}
          onChange={(value) => setAmount(value)}
        />
      </div>
      <Button onClick={() => addToBasket()}>
        <span className="fa fa-shopping-cart p-2" />
        ADD TO BASKET
      </Button>
      <p>{clientInfo}</p>
    </Container>
  );
};

export default ProductPage;
