import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const BasketSummary = ({ productsBasketList }) => {
  function sumOrder(productsBasketList) {
    let totalPrice = 0;
    productsBasketList.forEach((order) => {
      totalPrice = totalPrice + Number(order.amount) * Number(order.price);
    });
    return totalPrice;
  }
  const totalOrderPrice = sumOrder(productsBasketList);
  return (
    <Container fluid>
      <row>
        <Col xs="12">
          <h1>Order summary </h1>
        </Col>
      </row>
      <Row>
        <Col xs="10">Total price of order:</Col>
        <Col xs="2">{totalOrderPrice} zł</Col>
      </Row>
    </Container>
  );
};

export default BasketSummary;
