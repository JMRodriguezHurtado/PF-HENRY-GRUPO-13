import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';
import NavBar from './components/navBar.jsx';
import CreateProduct from './features/ProductCreationForm/CreateProduct.jsx';
import Home from './views/Home';
import Landing from './views/Landing';
import ShoppingCart from './views/ShoppingCart';


const App = () => {
  const location = useLocation()


  return (
    <main className="relative">
      { location.pathname !== '/' &&
        <NavBar />
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create/product' element={<CreateProduct/>} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
    </main>
  );
};


export default App;