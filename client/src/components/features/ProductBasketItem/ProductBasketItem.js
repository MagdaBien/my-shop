import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NumberPicker from 'react-widgets/NumberPicker';
import 'react-widgets/styles.css';
import styles from './ProductBasketItem.module.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { removeOrder, editOrder } from '../../../redux/ordersRedux';

const ProductBasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(product.amount);
  const [comment, setComment] = useState(product.comment);

  function updateAmount(newAmount) {
    setAmount(newAmount);
  }

  function updateOrder() {
    const updatedDataOrder = {
      productId: product.productId,
      price: product.price,
      amount,
      comment,
    };
    dispatch(editOrder(updatedDataOrder));
  }

  function removeFromBasket(id) {
    dispatch(removeOrder(id));
  }

  return (
    <Container fluid>
      <Row>
        <Col> {product.productId}</Col>
        <Col>
          <div className={styles.picker}>
            <NumberPicker
              defaultValue={amount}
              step={1}
              min={1}
              onChange={(value) => updateAmount(value)}
            />
          </div>
        </Col>
        <Col>{product.price} zł</Col>
        <Col>{Number(amount) * Number(product.price)} zł</Col>
        <Col>
          <Button
            variant="danger"
            onClick={() => removeFromBasket(product.productId)}
          >
            REMOVE
          </Button>
        </Col>
        <Col>
          <Form.Group controlId="comment" className="mb-3">
            <Form.Control
              type="text"
              placeholder="comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="success" onClick={() => updateOrder()}>
            SAVE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductBasketItem;
