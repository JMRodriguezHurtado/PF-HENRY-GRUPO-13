
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/Landing';
import ShoppingCart from './Pages/ShoppingCart';
import CreateProduct from './components/Dashboard/NewProduct';
import ShowStock from './components/Dashboard/showStock';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';

const App = () => {
  return (
    <main className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/CreateProduct' element={<CreateProduct />} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/dashboard/showStock" element={<ShowStock/>}/>
      </Routes>
    </main>
  );
};


export default App;