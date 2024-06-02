import Slider from '../../views/Slider/Slider';
import ProductsList from '../../features/ProductsList/ProductsList';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Slider />
      <ProductsList />
    </Container>
  );
};

export default HomePage;
