import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductBasketItem from '../../features/ProductBasketItem/ProductBasketItem';

const ProductsBasketList = ({ productsBasketList }) => {
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
        <Col>Remove</Col>
        <Col>Comments</Col>
        <Col>Save changes</Col>
      </Row>
      <div>
        {productsBasketList.map((product) => (
          <ProductBasketItem
            key={product.productId}
            product={product}
          ></ProductBasketItem>
        ))}
      </div>
    </>
  );
};

export default ProductsBasketList;
