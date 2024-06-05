import {
  isLoadingData,
  isErrorData,
  isDataReady,
  clearOrder,
  getAllOrders,
  startRequest,
  addOrderRecord,
} from '../../../redux/ordersRedux';
import { getUser, clearUser } from '../../../redux/usersRedux';
import { useDispatch, useSelector } from 'react-redux';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';
import { useEffect } from 'react';

const EndOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getAllOrders);

  const user = useSelector(getUser);

  useEffect(() => {
    const ordersToDB = orders.map((order) => ({
      productId: order.productId,
      clientId: user.id,
      comment: order.comment,
      amount: order.amount,
    }));

    dispatch(startRequest());
    ordersToDB.forEach((order) => {
      dispatch(addOrderRecord(order));
    });
    dispatch(clearOrder());
    dispatch(clearUser());
  }, [dispatch]);

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
  console.log('orders: ', orders);

  return (
    <>
      <div>
        <p>Zamówienie wysłano do bazy.</p>
      </div>
    </>
  );
};

export default EndOrder;
