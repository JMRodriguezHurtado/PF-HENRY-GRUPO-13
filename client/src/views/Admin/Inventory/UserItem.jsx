import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import UserPublicToggle from "./UserPublicToggle";

const UserItem = ({ user }) => {
  const { name, email, _id, deleted } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <tr className="border-b hover:bg-blue-50 transition duration-300 ease-in-out rounded-lg">
      <td className="border px-4 py-2 text-center">{name}</td>
      <td className="border px-4 py-2 text-center">{email}</td>
      <td className="border px-4 py-2 text-center flex items-center justify-center">
        <UserPublicToggle id={_id} deleted={deleted} />
      </td>
    </tr>
  );
};

export default UserItem;