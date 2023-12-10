import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selection from "../../components/Selection/Selection";
import { getAllProducts, getDeletedProducts } from "../../redux/actions";
import Inventory from "./Inventory/Inventory";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.results);
  const deletedProducts = useSelector((state) => state.deletedProducts?.results);
  console.log("Products:", products)
  console.log("DeltedProducts", deletedProducts)

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getDeletedProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="p-5 ml-72 h-full">
        <div className="p-5 rounded-xl bg-blue-200 shadow mt-3 h-full">
          <div>
            <div className="mt-6">
                <Selection />
                <Inventory products={products} title="Productos disponibles" />
                <Inventory products={deletedProducts} title="Productos eliminados" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
