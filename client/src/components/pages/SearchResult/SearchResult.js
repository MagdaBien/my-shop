import { useDispatch, useSelector } from 'react-redux';
import {
  getAllFoundProducts,
  getAllProducts,
  isLoadingData,
  isErrorData,
  isDataReady,
} from '../../../redux/productsRedux';
import ProductItem from '../../views/ProductItem/ProductItem';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import LoadingDataInfo from '../../common/LoadingDataInfo/LoadingDataInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchResult = () => {
  const dispatch = useDispatch();
  const { searchPhrase } = useParams();

  const productsList = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getAllFoundProducts(searchPhrase));
  }, [searchPhrase]);

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
          <h1>All products by phrase: {searchPhrase}</h1>
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

export default SearchResult;
