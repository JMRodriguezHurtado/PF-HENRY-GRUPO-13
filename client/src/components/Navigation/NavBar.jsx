import { Button, Modal } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login-register/Login/Login";
import LoginRegister from "../Login-register/LoginRegister";
import SearchBar from "../SearchBar";
import homeicon2 from "../assets/icons/homeicon2.png";
import shoppingCart from "../assets/icons/shoppingCart.png";
import userIcon from "../assets/icons/userIcon.png";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsModalOpen(false);
  }

  const handleLogout = () => {  
    localStorage.removeItem("token");
    navigate("/");
  };

  const isUserLoggedIn = !!localStorage.getItem("token");

  const isAdmin = "gsfgs"

  const {pathname} = useLocation()

  return (
    <nav className="fixed top-0 w-full bg-blue1 shadow-md z-50 px-[5vw] flex items-center justify-between p-2">
      <div className="flex">
        <img
          className="w-[50px] h-[50px] cursor-pointer "
          src={homeicon2}
          alt="home"
          onClick={() => navigate("/")}
        />
      </div>
      {!pathname.includes("/dashboard") && <>
        <div className="flex">
          <img
            className="w-[50px] h-[50px] cursor-pointer"
            src={shoppingCart}
            alt="shoppingCart"
            onClick={() => navigate("/shoppingCart")}
          />
        </div>
        <div className="flex">
          <SearchBar />
        </div>
        {isAdmin && (
          <>
            <div>
              <Button
            className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="primary"
            onClick={()=>navigate("/dashboard")}>Dashboard</Button>
            </div>
          </>)
        }
      </>}
      {pathname.includes("/dashboard") && <>
        <div>
          <Button
            className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="primary"
            onClick={()=>navigate("/dashboard")}>Dashboard</Button>
        </div>
        <div>
          <Button
            className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="primary"
            onClick={()=>navigate("/dashboard")}>Dashboard</Button>
        </div>
        <div>
          <Button
            className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
            type="primary"
            onClick={()=>navigate("/dashboard/showStock")}>See Stock</Button>
        </div>
      </>}
      {isUserLoggedIn && (
        <div className="flex">
          <img 
            className="w-[50px] h-[50px] cursor-pointer"
            src={userIcon}
            alt="user"
          />
        </div>
      )}

  {isUserLoggedIn ? (
        <Button
          className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
          type="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          className="flex items-center justify-center text-gray4 font-pop-light text-xl bg-transparent border-none shadow-none navbutton"
          type="primary"
          onClick={showModal}
        >
          Entrar/Registrarse
        </Button>
      )}
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Login onLogin={handleLogin} />
        <LoginRegister />
      </Modal>
    </nav>
  );
}

export default NavBar;