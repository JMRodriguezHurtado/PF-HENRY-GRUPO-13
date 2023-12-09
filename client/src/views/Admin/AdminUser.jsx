import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, deleteUser } from '../../redux/actions';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

const AdminUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const info = useSelector((state) => state.products?.info);

  useEffect(() => {
    console.log('voy por los usuarios')
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));

    Swal.fire({
      title: 'Usuario Baneado',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="relative bg-blue-200">
      <div className="text-center py-10 bg-blue-200">
        <h2 className="text-3xl font-bold text-black mb-4">Tus Usuarios</h2>
        <div className="mb-4">
          <NavLink to="/dashboard/users/deleted">
            <button className="bg-gray-500 text-white p-2 rounded">Usuarios Borrados</button>
          </NavLink>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Usuario</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Remover Usuario</th>
            </tr>
          </thead>
          <tbody>
            {users?.results.map((user) => (
              <tr key={user._id}>
                <td className="border p-2 flex items-center">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.deleted ? "Inactivo" : "Activo"}</td>
                <td className="border p-2">
                  <button onClick={() => handleDeleteUser(user._id)} className="text-black">
                    Ban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination info={info}/>
    </div>
  );
};

export default AdminUser;