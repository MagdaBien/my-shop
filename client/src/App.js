import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

import HomePage from './components/pages/HomePage/HomePage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import OrderSummaryPage from './components/pages/OrderSummaryPage/OrderSummaryPage';
import BasketPage from './components/pages/BasketPage/BasketPage';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/summary" element={<OrderSummaryPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
