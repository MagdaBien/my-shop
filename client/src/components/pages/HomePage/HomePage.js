import Slider from '../../views/Slider/Slider';
import ProductsList from '../../features/ProductsList/ProductsList';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Slider />
      <h2>Grafika do zrobienia, ale zabrakło mi te dwa dni przed urlopem :(</h2>
      <ProductsList />
    </Container>
  );
};

export default HomePage;
