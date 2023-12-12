import React from 'react'

const CardsUserProduct = ({ name, img, admin, price }) => {
  const prices = `$ ${price}`
  return (
    <tbody>
      <tr className="hover:bg-grey-lighter text-center">
        <td className="py-2 px-5 border-b border-grey-light">
          <img src={img} alt={`Imagen de ${name}`} className="rounded-full h-5 w-5"/>
        </td>
        <td className="py-2 px-2 border-b border-grey-light">{name}</td>
        <td className="py-2 px-2 border-b border-grey-light">{admin || prices}</td>
      </tr>
    </tbody>

  )
}

export default CardsUserProduct;