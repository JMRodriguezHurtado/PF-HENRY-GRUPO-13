import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getProductsByName } from "../redux/actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    if (searchTerm) {
      dispatch(getProductsByName(searchTerm, navigate));
      setSearchTerm('');
      navigate('/searchs')
    };
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Buscar</button> 
    </div>
  );
};

export default SearchBar;