import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Card from '../components/Card';
import Categories from '../assets/iconsFilters/Category.svg';
import Headset from '../assets/iconsFilters/Headsets.svg';
import Microphone from '../assets/iconsFilters/Microphones.svg';
import Monitor from '../assets/iconsFilters/Monitors.svg';
import Mousepad from '../assets/iconsFilters/Mousepads.svg';
import Earbud from '../assets/iconsFilters/Earbuds.svg';
import Keyboard from '../assets/iconsFilters/Keyboards.svg';
import Mices from '../assets/iconsFilters/Mice.svg';
import Controller from '../assets/iconsFilters/Controllers.svg';

const categoryImages = {
  Headsets: Headset,
  Microphones: Microphone,
  Monitors: Monitor,
  Mousepads: Mousepad,
  Earbuds: Earbud,
  Keyboards: Keyboard,
  Mice: Mices,
  Controllers: Controller,
};

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.results);
  const info = useSelector((state) => state.products?.info);

  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    sale: null,
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue === "Todos" ? null : filterValue,
    }));
    setCurrentPage(1);
    window.scrollTo(0, 0); 
  };
  
  const categories = ["Headsets", "Microphones", "Monitors", "Mousepads", "Earbuds", "Keyboards", "Mice", "Controllers"];

  const itemsPerPage = 12; 
  const totalPages = Math.ceil(info?.total / itemsPerPage);

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <li key={i}>
        <a
          href="javascript:void(0)"
          className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 ${
            i === currentPage ? 'bg-blue-50 text-blue-600' : ''
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </a>
      </li>
    );
  }

  const toggleCategoryOptions = () => {
    setShowCategoryOptions(!showCategoryOptions);
  };

  const categoriesWithAll = ["", ...categories];

  
  return (
    <div >
    <h1 className="mt-20 text-4xl font-bold">Bienvenido</h1>
      <p className="text-lg text-gray-600">Explora lo nuevo en tecnologia:</p>
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