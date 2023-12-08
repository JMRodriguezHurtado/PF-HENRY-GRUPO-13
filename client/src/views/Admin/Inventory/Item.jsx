import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/actions";
import PublicToggle from "./PublicToggle";

const Item = ({ product }) => {
  const { name, price, quantity, _id, deleted } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <tr className="border-b hover:bg-blue-50 transition duration-300 ease-in-out rounded-lg">
      <td className="border px-4 py-2 text-center">{name}</td>
      <td className="border px-4 py-2 text-center">{price}</td>
      <td className="border px-4 py-2 text-center">{quantity}</td>
      <td className="border px-4 py-2 text-center flex items-center justify-center">
        <PublicToggle id={_id} deleted={deleted} />
      </td>
    </tr>
  );
};

export default Item;
