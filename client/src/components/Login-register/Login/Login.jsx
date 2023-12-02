import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from "../../../redux/actions";
import validation from '../../../utils/Validation/ValidationLogin';
import { button_disabledStyle, button_style, divButtons_style, div_style, form_style, input_style, label_style } from "./tailwindStylesLogin";

const Login = () => {
  const access = useSelector(state => state.access);
  const success = useSelector(state => state.successPostLogin);
  const error = useSelector(state => state.errorPostLogin);
  const messageLogin = useSelector(state => state.messageLogin);

  const dispatch = useDispatch();
  
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
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
    dispatch(postLogin(userData));
  };

  const isFormValid = !userData.email.length || !userData.password.length;

  return (
      <form onSubmit={handleSubmit} className={form_style}>
        <div className={div_style}>
          <label className={label_style}>Correo electrónico: </label>
          <input
            type="text"
            value={userData.email}
            name='email'
            onChange={handleChange} 
            placeholder=' Ingrese su email'
            className={input_style}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className={div_style}>
          <label className={label_style}>Contraseña: </label>
          <input
            type='password'
            value={userData.password}
            name='password'
            onChange={handleChange}
            placeholder=' Ingrese su contraseña'
            className={input_style}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className={divButtons_style}>
          <button
            className={!isFormValid ? button_disabledStyle : button_style}
            name='User'
            type="submit"
            disabled={isFormValid}
          >
            Iniciar Sesion
          </button>
        </div>

        { success && access && (
          <p>{messageLogin}</p>
        )}
        { error && (
          <p>{error}</p>
        )}
        
      </form>
  );
};
export default Login;
