import { Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';
import LandingPage from './views/Landing';
import ShoppingCart from './views/ShoppingCart';

const App = () => {
  return (
    <main className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/CreateProduct' element={<CreateProduct />} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
    </main>
  );
};


export default App;