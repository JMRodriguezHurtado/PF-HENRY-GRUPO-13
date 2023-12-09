import { NavLink } from 'react-router-dom';

const PurchaseCard = ({ brand, category, price, name, img, purchaseDate, _id }) => {
  return (
    <tr className="bg-gray-800">
      <td className="p-3">
        <NavLink to={`/detail/${_id}`} className="flex items-center">
          <img className="rounded-full h-12 w-12 object-cover" src={img} alt={`Imagen de ${name}`} />
          <div className="ml-5">
            <div className="text-gray-50 w-40 truncate text-lg font-semibold">{name}</div>
          </div>
        </NavLink>
      </td>

      <td className="p-3">
        {category}
      </td>
      <td className="p-3 font-bold">
        {price}
      </td>
      <td className="p-3">
        <span className="text-gray-300 rounded-md px-2">{brand}</span>
      </td>
      <td className="p-3">
        {purchaseDate}
      </td>
    </tr>
  );
};

export default PurchaseCard;

//CAMBIAR EL MODELO DE PURCHASES PARA QUE TENGA UNA REFERENCIA A LA FECHA DE COMPRA