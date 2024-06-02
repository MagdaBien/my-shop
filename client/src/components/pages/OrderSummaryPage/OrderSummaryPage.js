import {
  getAllOrders,
  isLoadingData,
  isErrorData,
  isDataReady,
} from '../../../redux/ordersRedux';
import { useDispatch, useSelector } from 'react-redux';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductsOrderList from '../../features/ProductsOrderList/ProductsOrderList';
import BasketSummary from '../../features/BasketSummary/BasketSummary';
import OrderUserDataForm from '../../features/OrderUserDataForm/OrderUserDataForm';

const OrderSummaryPage = () => {
  const dispatch = useDispatch();
  const productsBasketList = useSelector(getAllOrders);

  useEffect(() => {
    //dispatch(loadOrdersRequest());
  }, [dispatch]);

  // --- loading data
  const isLoading = useSelector(isLoadingData);
  const isError = useSelector(isErrorData);
  const isReady = useSelector(isDataReady);
  //console.log('isLoading: ', isLoading, isError, isReady);
  if (!isReady) {
    return (
      <LoadingDataInfo
        isLoading={isLoading}
        isError={isError}
      ></LoadingDataInfo>
    );
  }

  return (
    <Container>
      <h1>OrderSummaryPage</h1>
      <ProductsOrderList productsBasketList={productsBasketList} />
      <BasketSummary productsBasketList={productsBasketList} />
      <OrderUserDataForm />
    </Container>
  );
};

export default OrderSummaryPage;
