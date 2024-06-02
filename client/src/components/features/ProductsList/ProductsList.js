import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  loadProductsRequest,
  getAllProducts,
  isLoadingData,
  isErrorData,
  isDataReady,
} from '../../../redux/productsRedux';
import ProductItem from '../../views/ProductItem/ProductItem';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  const productsList = useSelector(getAllProducts);

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

  return (
    <>
      <Row>
        <Col className="mt-3 mb-2">
          <h1>All products</h1>
        </Col>
      </Row>
      <div className="d-flex justify-content-around">
        {productsList.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
