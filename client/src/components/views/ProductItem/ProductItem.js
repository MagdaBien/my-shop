import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../../config';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={IMGS_URL + 'camera.jpg'} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Nav.Link as={NavLink} to={'/products/' + product.id}>
          <Button variant="primary">More Info</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
