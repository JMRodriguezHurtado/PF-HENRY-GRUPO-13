import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../redux/actions';

const CategoriesExtractor = ({ children }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const categoriesSet = new Set(products.flatMap((product) => product.categories));
  const uniqueCategories = [...categoriesSet];

  return children(uniqueCategories);
};

export default CategoriesExtractor;

