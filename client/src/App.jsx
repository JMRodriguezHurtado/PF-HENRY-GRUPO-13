
import { Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Dashboard from './components/Dashboard/Dashboard';
import ShowStock from './components/Dashboard/showStock';
import Detail from './components/Detail';
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
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/dashboard/showStock" element={<ShowStock/>}/>
      </Routes>
    </main>
  );
};


export default App;