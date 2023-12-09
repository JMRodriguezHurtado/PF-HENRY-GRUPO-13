import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersDeleted, restoreUser } from '../../redux/actions';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const AdminDeletedUsers = () => {
  const dispatch = useDispatch();
  const deletedUsers = useSelector((state) => state.allUsersDeleted);
  console.log(deletedUsers)

  useEffect(() => {
    dispatch(getAllUsersDeleted());
  }, [dispatch]);

  const handleRestoreUser = (userId) => {
    dispatch(restoreUser(userId));

    Swal.fire({
      title: 'Usuario Restaurado',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="relative bg-blue-200">
      <div className="text-center py-10 bg-blue-200 h-screen">
        <h2 className="text-3xl font-bold text-black mb-4">Usuarios removidos</h2>
        <div className="mb-4">
          <NavLink to="/dashboard/users">
            <button className="bg-gray-500 text-white p-2 rounded">Usuarios</button>
          </NavLink>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Usuario</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Restaurar Usuario</th>
            </tr>
          </thead>
          <tbody>
            {deletedUsers?.results.map((user) => (
              <tr key={user._id}>
                <td className="border p-2 flex items-center">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.deleted ? "Inactivo" : "Activo"}</td>
                <td className="border p-2">
                  <button onClick={() => handleRestoreUser(user._id)} className="text-black">
                    Restaurar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDeletedUsers;