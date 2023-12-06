<<<<<<< Updated upstream
import React from 'react'

const AdminProducts = () => {
  return (
    <div>
      
    </div>
  )
}

export default AdminProducts
=======
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import Products from '../../components/Products/Products';
import Swal from 'sweetalert2';

const AdminProducts = () => {
  

  return (
    <div className="relative bg-blue-200">
      <div className="text-center py-10 bg-blue-200 h-screen">
        <h2 className="text-3xl font-bold text-black mb-4">Productos</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Producto</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Precio</th>
              <th className="border p-2">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            
              <tr >
                <td className="border p-2 flex items-center">
                  
                 
                </td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
                <td className="border p-2">
                  <button
                   
                    className="text-black"
                  >
                    Remover producto
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
>>>>>>> Stashed changes
