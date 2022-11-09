import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/products/:id' element={ <Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
