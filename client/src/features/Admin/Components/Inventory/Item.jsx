import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../../redux/actions';

const Item = ({ product}) => {
  const { name, price, quantity, _id, deleted } = product

  const dispatch = useDispatch()
  const handleClick = () => {
    console.log("Deleted before", deleted)
    dispatch(deleteProduct(_id))
    console.log("Deleted after", deleted)
  }
  return (
    <tr className="border-b">
        <td className="border px-4 py-2">{name}</td>
        <td className="border px-4 py-2">{price}</td>
        <td className="border px-4 py-2">{quantity}</td>
        <td><button onClick={handleClick}>DELETE</button></td>
    </tr>
  );
};

export default Item;
