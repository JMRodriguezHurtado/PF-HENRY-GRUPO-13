import { NavLink } from 'react-router-dom';

const Card = ({ price, img, name, _id }) => {
  return (
    <NavLink className={'group bg-gray-100 shadow duration-150 hover:scale-105 hover:shadow-md'} to={`/detail/${_id}`}>      
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 '>
        <img className='h-full w-full object-cover object-center group-hover:opacity-75' src={img} alt={`${name} image`} />
      </div>
          <h3 className='my-4 pl-4 font-bold text-black-500'>{name}</h3>
          <p className='mb-4 ml-4 text-xl font-semibold text-gray-800'>{price}</p>
    </NavLink>
  );
};

export default Card;