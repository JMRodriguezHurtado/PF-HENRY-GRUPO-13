import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPurchases } from '../../redux/actions';
import { jwtDecode } from 'jwt-decode';
import PurchaseCard from '../../components/PurchaseCard';

const UserPurchase = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;

  const dispatch = useDispatch();

  const userPurchase = useSelector((state) => state.userPurchase);

  useEffect(() => {
    dispatch(getUserPurchases(userId));
  }, []);

  console.log(userPurchase);

  return (
    <div className="flex items-center mt-5 pt-10 pb-5 justify-center min-h-screen bg-gray-900">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3 text-gray-300">Nombre</th>
                <th className="p-3 text-gray-300 text-left">Categoria</th>
                <th className="p-3 text-gray-300 text-left">Precio</th>
                <th className="p-3 text-gray-300 text-left">Marca</th>
                <th className="p-3 text-gray-300 text-left">Fecha de compra</th>
              </tr>
            </thead>
            <tbody>
            {userPurchase.map((purchase) => (
                purchase.products.map((product) => (
                  <PurchaseCard
                    key={product._id} 
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                    name={product.name}
                    img={product.img}
                    purchaseDate={purchase.purchaseDate}
                  />
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserPurchase;