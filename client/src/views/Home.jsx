import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import AdminDashboard from '../features/Admin/AdminDashboard';
import Welcome from './Welcome';

const Home = () => {
  const info = useSelector((state) => state.products?.info);
  const products = useSelector((state) => state.products.results);
  console.log("info", info)
  console.log("products", products)
  return (
    <div className="relative h-full min-h-[100vh] bg-blue-200 inset-0 text-center pt-5 pb-0 flex flex-col items-center">
      <Welcome/>
      <AdminDashboard products={products}/>
      <Pagination info={info}/>
    </div>
  );
};

export default Home;
