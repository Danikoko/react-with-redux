import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
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
      </Router>
    </div>
  )
}

export default App
