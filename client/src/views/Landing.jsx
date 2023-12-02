import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Pagination from './Pagination';
import Products from './Products';
import Selection from './Selection';



const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.results);
  const info = useSelector((state) => state.products?.info);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    sale: 3,
    price: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllProducts(currentPage, 12, filters));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch, currentPage, filters]);

  

  const scrollToTop = () => {
    scrollTo({
      top: 0,
      duration: 900,
      easing: 'easeInOutCubic',
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);
  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue === "Todos" ? null : filterValue,
    }));
    setCurrentPage(1);
  };

  const handleRefreshFilters = () => {
    setFilters({
      category: '',
      sale: 3,
      price: '',
    });

    dispatch(getAllProducts(1, 12, {
      category: '',
      sale: 3,
      price: '',
    }));
  };

  

  const categories = ["Headsets", "Microphones", "Monitors", "Mousepads", "Earbuds", "Keyboards", "Mice", "Controllers"];

  const itemsPerPage = 12;
  const totalPages = Math.ceil(info?.total / itemsPerPage);

  

  const categoriesWithAll = ["", ...categories];

  const hasAppliedFilters = filters.category !== '' || filters.sale !== '3' || filters.price !== '';

  return (
    <div className="relative h-full min-h-[100vh] bg-blue-200">
      <div className="relative inset-0">
        <div className="text-center pt-5 pb-0 relative">
          <div className="flex flex-col items-center " >
            <h1 className= "p-10 pb-5 text-4xl font-bold mb-0">Bienvenido</h1>
            <p className="text-lg text-gray-600 mb-3">Explora lo nuevo en tecnología</p>
            <Selection filters={filters} categoriesWithAll={categoriesWithAll} handleFilterChange={handleFilterChange} hasAppliedFilters={hasAppliedFilters} handleRefreshFilters={handleRefreshFilters}/>
            <Products products={products}/>
            <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
