

const Detail = ({ brand, price, img, name, description, _id, category, quantity }) => {
  return (
    <div>

      <div>
        <img src={img} alt={`${name} image`} />
      </div>

      <div>
        {name}
      </div>

      <div>
        {price}
      </div>

      <div>
        {brand}
      </div>

      <div>
        {description}
      </div>

      <div>
        {category}
      </div>

      <div>
        {quantity}
      </div>

    </div>
  );
};

export default Detail;