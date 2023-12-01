import  { useState } from "react";
import { h1_style,div_style, button_style, button_disabledStyle } from "./tailwindStylesRegister";
import { postUser } from "../../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import validation from "../../../utils/Validation/ValidationRegister";

const Register = () => {
  const access = useSelector(state => state.access);
  const success = useSelector(state => state.successPostUser);
  const error = useSelector(state => state.errorPostUser);
  const messageRegister = useSelector(state => state.messageRegister);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    img: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation({ ...userData, [name]: value })[name]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(userData));
  };

  const isFormValid =
  !userData.name ||
  !userData.phoneNumber ||
  !userData.email ||
  !userData.password ||
  !userData.address;
  
  console.log(messageRegister);
  console.log(error);

  return (
    <div >
    <h1 className={h1_style}>Registro de Usuario</h1>
    <form id="registroForm" className="mt-4" onSubmit={handleSubmit}>

      <div className="-mx-3 md:flex mb-1">
        <div className="md:w-1/2 px-3 mb-3">
          <div className="flex flex-col">
            <input 
              type="text"
              value={userData.name} 
              name="name" 
              onChange={handleChange} 
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-1 placeholder-gray-900"
              placeholder="Nombre"
            />
            {errors.name && <p className="text-red-900 text-xs italic text-center">{errors.name}</p>}
          </div>
        </div>

        <div className="md:w-1/2 px-3 mb-3">
          <div className="flex flex-col">
            <input 
              value={userData.phoneNumber} 
              name="phoneNumber" 
              onChange={handleChange} 
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1 placeholder-gray-900"
              placeholder="Número de teléfono"
            />
            {errors.phoneNumber && <p className="text-red-900 text-xs italic text-center">{errors.phoneNumber}</p>}
          </div>
        </div>
      </div>

      <div className="-mx-3 md:flex mb-1">
        <div className="md:w-1/2 px-3 mb-3">
          <div className="flex flex-col">
            <input
              type='password'
              value={userData.password}
              name='password'
              onChange={handleChange}
              placeholder='Contraseña'
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1 placeholder-gray-900" 
            />
            {errors.password && <p className="text-red-900 text-xs italic text-center">{errors.password}</p>}
          </div>
        </div>

        <div className="md:w-1/2 px-3 mb-3">
          <div className="flex flex-col">
            <input
              type="text"
              value={userData.email} 
              name="email" 
              onChange={handleChange} 
              placeholder="Correo electrónico"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1 placeholder-gray-900" 
            />
            {errors.email && <p className="text-red-900 text-xs italic text-center">{errors.email}</p>}
          </div>
        </div>
      </div>

      <div className="-mx-3 md:flex mb-1">
        <div className="md:w-full px-3 mb-3">
          <div className="flex flex-col">
            <input
              value={userData.address} 
              name="address" 
              onChange={handleChange} 
              placeholder="Dirección"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1 placeholder-gray-900" 
            />
            {errors.address && <p className="text-red-900 text-xs italic text-center">{errors.address}</p>}
          </div>
        </div>
      </div>

      <div className={div_style}>
        <button className={isFormValid ? button_disabledStyle : button_style} type="submit" disabled={isFormValid}>Registrarse</button>
      </div>

      {success && access && (
        <p>{messageRegister}</p>
      )}

      { error && (
        <p>{error}</p>
      )}
    </form>
  </div>
  );
};

export default Register;