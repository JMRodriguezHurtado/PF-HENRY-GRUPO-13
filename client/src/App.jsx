import { Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';
import Landing from './views/Landing';
import NavBar from './components/navBar.jsx'
import { useLocation } from 'react-router-dom';


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
        <Route path='/create/product' element={<CreateProduct />} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
    </main>
  );
};


export default App;