import { useState } from "react";
import Register from "../Login-register/Register/Register";
import Login from "../Login-register/Login/Login";
import ButtonLoginGoogle from "./ButtonLoginGoogle";
import LOGO from "../../assets/LOGO.png";

function LoginRegister() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isImageSmaller, setIsImageSmaller] = useState(false);

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
    setIsImageSmaller(!isImageSmaller);
  };

  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
    // Establecer isImageSmaller en false al hacer clic en "Inicio de Sesión"
    setIsImageSmaller(false);
  };

  const isFormSelected = showRegister || showLogin;

  return (
    <div>
      <div className={`flex items-center justify-center ${isFormSelected && isImageSmaller ? 'h-[110px] pb-3 m-0' : ''}`}>
        <div className={`flex transition-transform duration-300 p-0 ease-in-out ${isFormSelected && isImageSmaller ? 'scale-50' : ''}`}>
          <img src={LOGO} alt="Logo" className="h-30 w-30 m-0" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-0">
        <button className={`bg-blue-900 hover:bg-blue-800 px-0 py-0 rounded-lg mx-2 min-w-[200px] h-[55px] text-[20px] text-white font-thin flex items-center justify-center ${isFormSelected && isImageSmaller ? 'transform scale-75 p-0 m-0' : ''}`} onClick={handleToggleRegister}>
          {showRegister ? "Cancelar" : "Registrarse"}
        </button>

        <button className={`bg-blue-400 hover:bg-blue-800 px-0 py-0 rounded-lg mx-2 min-w-[200px] h-[55px] text-[20px] text-white font-thin flex items-center justify-center ${isFormSelected && isImageSmaller ? 'transform scale-75 p-0 m-0' : ''}`} onClick={handleToggleLogin}>
          {showLogin ? "Cancelar" : "Inicio de Sesión"}
        </button>
      </div>

      <div className="mt-1">
        {showRegister && <Register />}
        {showLogin && !showRegister && <Login />}
      </div>

      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">Continuar con</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ButtonLoginGoogle />
      </div>
    </div>
  );
}

export default LoginRegister;
