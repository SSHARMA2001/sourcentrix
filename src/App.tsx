import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import CoreValues from './components/CoreValues';
import WhyUs from './components/WhyUs';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import SupplierBase from './components/SupplierBase';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AllProducts from './components/AllProducts';
import CategoryProducts from './components/CategoryProducts';
import './App.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <CoreValues />
      <WhyUs />
      <MissionVision />
      <Services />
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
      <SupplierBase />
      <Industries />
      <Clients />
      <Contact />
    </>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/products/all" element={<AllProducts />} />
            <Route path="/products/category/:categoryId" element={<CategoryProducts />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
