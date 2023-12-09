
import PublicToggle from "./PublicToggle";

const Item = ({ product }) => {
  const { name, price, quantity, _id, deleted } = product;

  return (
    <tr className="hover:bg-blue-50 transition duration-300 ease-in-out rounded-lg border-b my-2">
      <td className="px-4 py-2 text-center">{name}</td>
      <td className="px-4 py-2 text-center">{price}</td>
      <td className="px-4 py-2 text-center">{quantity}</td>
      <td className="px-4 py-2 text-center flex items-center justify-center">
        <PublicToggle id={_id} deleted={deleted} />
      </td>
    </tr>
  );
};

export default Item;
