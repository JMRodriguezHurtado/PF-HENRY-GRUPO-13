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
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button onClick={handleClick}>Boludo</button>
      </td>
    </tr>
  );
};

export default Item;
