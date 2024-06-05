import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../../config';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const doIterrable = require('../../../utils/doIterrable');

const ProductItem = ({ product }) => {
  let gallery = [...product.photos];
  let galleryFiles = doIterrable(gallery, 'prodImg');
  const fileFirst = galleryFiles[0];

  return (
    <Card className="m-1">
      <Card.Img variant="top" src={IMGS_URL + fileFirst} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.shortDescription}</Card.Text>
        <Nav.Link as={NavLink} to={'/products/' + product.id}>
          <Button variant="primary">More Info</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
