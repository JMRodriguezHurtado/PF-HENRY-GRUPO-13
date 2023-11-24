
import { NavLink } from 'react-router-dom';

const Card = ({ price, img, name, description, _id }) => {
  return (
    <div>
      <NavLink to={`/detail/${_id}`}>
        <div>
          <img src={img} alt={`${name} image`} />
        </div>
        <div>
          <h2>{price}</h2>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;