import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={<ProductListing />} 
          />
          <Route 
            path='/product/:productId' 
            element={<ProductDetail />} 
          />
          <Route 
            path='*' 
            element={<h1>404 Not Found!</h1>} 
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
