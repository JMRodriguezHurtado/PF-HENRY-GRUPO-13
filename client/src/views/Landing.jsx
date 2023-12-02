import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, setCurrentPage } from '../redux/actions';
import Pagination from './Pagination';
import Products from './Products';
import Selection from './Selection';
import Welcome from './Welcome';

const LandingPage = () => {
  const info = useSelector((state) => state.products?.info);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.results);
  const currentPage = useSelector(state => state.currentPage)

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
  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue === "Todos" ? null : filterValue,
    }));
    dispatch(setCurrentPage(1));
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

  

  
  
  

  

  

  const hasAppliedFilters = filters.category !== '' || filters.sale !== '3' || filters.price !== '';

  return (
    <div className="relative h-full min-h-[100vh] bg-blue-200 inset-0 text-center pt-5 pb-0 flex flex-col items-center">
      <Welcome/>
      <Selection filters={filters} handleFilterChange={handleFilterChange} hasAppliedFilters={hasAppliedFilters} handleRefreshFilters={handleRefreshFilters}/>
      <Products products={products}/>
      <Pagination info={info}/>
    </div>
  );
};

export default LandingPage;
