import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductsBasketList from '../../features/ProductsBasketList/ProductsBasketList';
import BasketSummary from '../../features/BasketSummary/BasketSummary';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';
import {
  getAllOrders,
  isLoadingData,
  isErrorData,
  isDataReady,
} from '../../../redux/ordersRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const BasketPage = () => {
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
      <h1>BasketPage</h1>
      <ProductsBasketList productsBasketList={productsBasketList} />
      <BasketSummary productsBasketList={productsBasketList} />
      <Nav.Link as={NavLink} to={'/summary'}>
        <Button variant="primary">GO ORDER</Button>
      </Nav.Link>
    </Container>
  );
};

export default BasketPage;
