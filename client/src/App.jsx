import { Route, Routes } from 'react-router-dom';
import CreateProduct from './views/Admin/CreateProduct.jsx';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';
import Landing from './views/Landing';
import NavBar from './views/User/navBar.jsx';
import { useLocation } from 'react-router-dom';
import SideBar from './views/Admin/SideBar.jsx';
import AdminDashboard from './views/Admin/AdminDashboard.jsx';
import AdminProducts from './views/Admin/AdminProducts.jsx';
import AdminUser from './views/Admin/AdminUser.jsx';
import Profile from './views/Admin/Profile.jsx';
import ProfileUser from './views/User/ProfileUser.jsx';
import UserPurchase from './views/User/UserPurchase.jsx';

const App = () => {
  const location = useLocation()

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <main className="relative">
      { !isDashboardRoute && location.pathname !== '/' && <NavBar /> }
      { isDashboardRoute && <SideBar /> }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create/product' element={<CreateProduct />} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
        <Route path='/profile' element={<ProfileUser/>} />
        <Route path='/profile/purchase' element={<UserPurchase/>} />

        {isDashboardRoute && (
          <>
        <Route path='/dashboard' element={<AdminDashboard/>} />
        <Route path='/dashboard/products' element={<AdminProducts/>} />
        <Route path='/dashboard/users' element={<AdminUser/>} />
        <Route path='/dashboard/profile' element={<Profile/>} />
        <Route path='/dashboard/create' element={<Profile/>} />
          </>
        )}
      </Routes>
    </main>
  );
};

export default App;