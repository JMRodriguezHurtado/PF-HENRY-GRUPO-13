import { Button, Modal } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/userIcon.png";
import Login from "../Login-register/Login/Login";
import LoginRegister from "../Login-register/LoginRegister";
import SearchBar from "../SearchBar";
import NavButton from "./NavButton";
import { cart, dashboard, home, stock } from "./buttons";
import { nav } from "./style";

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
    <nav className={nav}>
      <NavButton name={home}/>
      {!pathname.includes("/dashboard") && <>
        <NavButton name={cart}/>
        <SearchBar />
        {isAdmin && <NavButton name={dashboard}/>}
      </>}
      {pathname.includes("/dashboard") &&
        <div>
          <NavButton name={stock}/>
        </div>}
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