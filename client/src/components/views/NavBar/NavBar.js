import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import BasketWidget from '../../features/BasketWidget/BasketWidget';

const NavBar = () => {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      data-bs-theme="light"
      className={styles.bgprimary}
    >
      <Container>
        <Navbar.Brand>Shop online</Navbar.Brand>
        <Nav variant="underline">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/summary">
            OrderSummaryPage
          </Nav.Link>
          <Nav.Link as={NavLink} to="/basket">
            <BasketWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
