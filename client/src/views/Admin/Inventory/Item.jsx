import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/actions";
import PublicToggle from "./PublicToggle";

const Item = ({product}) => {
  const { name, price, quantity, _id, deleted } = product
  console.log("Product: ", product)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])
  return (
    <tr className="border-b">
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{price}</td>
      <td className="border px-4 py-2">{quantity}</td>
      <td>
        <PublicToggle id={_id} deleted={deleted}/>
      </td>
    </tr>
  );
};

export default Item;
