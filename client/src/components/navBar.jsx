import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import AuthModal from "./AuthModal";
import SearchBar from "./SearchBar";
import LOGO from "../assets/LOGO.png";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { clearData } from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("authModalShown", "false")
    dispatch(clearData());
    navigate("/home");
  };

  const isUserLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="fixed top-0 w-full bg-blue1 shadow-md z-40 px-[5vw] flex items-center justify-between p-2" >
      <div className="flex items-center">
        <img
          className="bg-gray-50 rounded-lg w-[50px] h-[50px] cursor-pointer"
          src={LOGO}
          alt="home"
          onClick={() => navigate("/home")}
        />
      </div>

      <div className="flex items-center justify-center">
        <SearchBar />
      </div>

      <div className="flex items-center space-x-4">
        {isUserLoggedIn && (
          <MdOutlineSpaceDashboard
            className="w-[50px] h-[50px] cursor-pointer hover:text-gray-100"
            onClick={() => navigate("/dashboard")}
            title="Dashboard"
          />
        )}

        {isUserLoggedIn && (
          <FaRegUser
            className="w-[40px] h-[40px] cursor-pointer hover:text-gray-100"
            title="User"
          />
        )}

        <LuShoppingCart 
          className="w-[40px] h-[40px] cursor-pointer hover:text-gray-100"
          onClick={() => navigate("/shoppingCart")}
          title="Cart"
        />
        
        {isUserLoggedIn ? (
          <button
            className="hover:text-gray-100 text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="button"
            onClick={handleLogout}
          >
            <RiLogoutBoxRLine className="w-[40px] h-[40px] cursor-pointer" title="Logout"/>
          </button>
        ) : (
          <Button
            className="text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="primary"
            onClick={showModal}
          >
            Entrar/Registrarse
          </Button>
        )}
      </div>

      <AuthModal isOpen={isModalOpen} onClose={handleCancel} onLogout={handleLogout}/>
    </nav>
  );
};

export default NavBar;