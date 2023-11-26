import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Card from '../components/Card';

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.results);

  useEffect(() => {
    const fetchData = async () => {
      try {
     dispatch(getAllProducts());
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='bg-blue3'>
    <h1 className="mt-20 text-4xl font-bold">Bienvenido</h1>
      <p className="text-lg text-gray4">Explora lo nuevo en tecnologia:</p>
    <div className= "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
   
      {products?.map((product) => (
        <Card
        key={product._id}
        name={product.name}
        price={product.price}
        img={product.img}
        _id={product._id}
      />
      ))}
    </div>
    </div>
  );
};

export default LandingPage;