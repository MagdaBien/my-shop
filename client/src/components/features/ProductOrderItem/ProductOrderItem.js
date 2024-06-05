import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'react-widgets/styles.css';
import styles from './ProductOrderItem.module.scss';

const ProductOrdertItem = ({ product }) => {
  return (
    <Container fluid>
      <Row>
        <Col> {product.title}</Col>
        <Col>
          <div className={styles.picker}>{product.amount}</div>
        </Col>
        <Col>{product.price} zł</Col>
        <Col>{Number(product.amount) * Number(product.price)} zł</Col>
        <Col>{product.comment}</Col>
      </Row>
    </Container>
  );
};

export default ProductOrdertItem;
