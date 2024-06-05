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
import { updateLocalOrders, getAllOrders } from '../../../redux/ordersRedux';
import ImgGallery from '../../common/ImgGallery/ImgGallery';
const doIterrable = require('../../../utils/doIterrable');

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
  console.log('actualBasket: ', actualBasket);

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
    let basket = [];
    if (actualBasket) {
      basket = [...actualBasket];
      const isExistingProduct = actualBasket.find(function (element) {
        return element.productId === id;
      });
      if (isExistingProduct) {
        basket = actualBasket.map((product) =>
          product.productId === id
            ? {
                title: product.title,
                productId: id,
                amount: product.amount + amount,
                price: product.price,
                comment: '',
              }
            : product,
        );
      } else {
        basket.push({
          title: product.title,
          productId: id,
          amount: amount,
          price: product.price,
          comment: '',
        });
      }
    } else {
      basket.push({
        title: product.title,
        productId: id,
        amount: amount,
        price: product.price,
        comment: '',
      });
    }

    dispatch(updateLocalOrders(basket));
    setClientInfo('Product added to your basket');

    setTimeout(() => {
      setClientInfo('');
    }, 3000);
  }

  let gallery = [...product.photos];
  let galleryFiles = doIterrable(gallery, 'prodImg');
  let isGallery = true;
  if (gallery.length === 0) {
    isGallery = false;
  }

  //console.log('gallery: ', gallery);

  return (
    <Container>
      Ilośc dodanych produktów: {amount}
      <h1>{product.title}</h1>
      <h2>{product.price} zł</h2>
      <p>{product.description}</p>
      <p>{isGallery && <ImgGallery images={galleryFiles}></ImgGallery>}</p>
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
      <h3>{clientInfo}</h3>
    </Container>
  );
};

export default ProductPage;
