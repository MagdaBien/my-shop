import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductOrderItem from '../../features/ProductOrderItem/ProductOrderItem';

const ProductsOrderList = ({ productsBasketList }) => {
  return (
    <>
      <Row>
        <Col className="mt-3 mb-2">
          <h1>All ordered products</h1>
        </Col>
      </Row>
      <Row>
        <Col>Product name</Col>
        <Col>Amount</Col>
        <Col>Price / pcs</Col>
        <Col>Total price</Col>
        <Col>Comments</Col>
      </Row>
      <div>
        {productsBasketList.map((product) => (
          <ProductOrderItem
            key={product.productId}
            product={product}
          ></ProductOrderItem>
        ))}
      </div>
    </>
  );
};

export default ProductsOrderList;
