import { useSelector } from 'react-redux';
import Selection from '../components/Selection/Selection';
import Pagination from './Pagination';
import Products from './Products';
import Welcome from './Welcome';

const LandingPage = () => {
  const info = useSelector((state) => state.products?.info);
  const products = useSelector((state) => state.products.results);
  return (
    <div className="relative h-full min-h-[100vh] bg-blue-200 inset-0 text-center pt-5 pb-0 flex flex-col items-center">
      <Welcome/>
      <Selection/>
      <Products products={products}/>
      <Pagination info={info}/>
    </div>
  );
};

export default LandingPage;
