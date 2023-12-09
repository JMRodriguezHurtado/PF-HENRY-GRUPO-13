import { Route, Routes, useLocation } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Detail from './components/Products/Detail';
import Searchs from './components/Searchs';
import NavBar from './components/navBar.jsx';
import AdminDashboard from './views/Admin/AdminDashboard.jsx';
import AdminProducts from './views/Admin/AdminProducts.jsx';
import AdminUser from './views/Admin/AdminUser.jsx';
import Profile from './views/Admin/Profile.jsx';
import ProfileUser from './components/ProfileUser.jsx';
import AdminDeletedUsers from './views/Admin/AdminDeletedUsers.jsx'
import Home from './views/Home';
import Landing from './views/Landing';
import ShoppingCart from './views/ShoppingCart';

const App = () => {
  const location = useLocation()

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <main className="relative">
      { !isDashboardRoute && location.pathname !== '/' && <NavBar /> }
      { isDashboardRoute && <AdminDashboard/> }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create/product' element={<CreateProduct />} />
        <Route path='/searchs' element={<Searchs />} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
        <Route path='/profile' element={<ProfileUser/>} />

        {isDashboardRoute && (
          <>
        <Route path='/dashboard' element={<AdminDashboard/>} />
        <Route path='/dashboard/products' element={<AdminProducts/>} />
        <Route path='/dashboard/users' element={<AdminUser/>} />
        <Route path='/dashboard/profile' element={<Profile/>} />
        <Route path='/dashboard/users/deleted' element={<AdminDeletedUsers/>}/>
          </>
        )}
      </Routes>
    </main>
  );
};

export default App;