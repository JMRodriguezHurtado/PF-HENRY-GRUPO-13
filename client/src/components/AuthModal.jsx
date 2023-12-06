import { useState, useEffect } from "react";
import { Modal } from "antd";
import LoginRegister from "./Login-register/LoginRegister";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const AuthModal = ({ isOpen, onClose, onLogout }) => {
  const successPostTokenGoogle = useSelector((state) => state.successPostTokenGoogle);
  const successPostUser = useSelector((state) => state.successPostUser);
  const successPostLogin = useSelector((state) => state.successPostLogin);
  const location = useLocation();
  
  const [showModalFor2Seconds, setShowModalFor2Seconds] = useState(false);
  const [modalAlreadyShown, setModalAlreadyShown] = useState(
    localStorage.getItem("authModalShown") === "true"
  );

  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (
      (successPostTokenGoogle || successPostUser || successPostLogin) &&
      !modalAlreadyShown
    ) {
      setShowModalFor2Seconds(true);

      timer = setTimeout(() => {
        setShowModalFor2Seconds(false);
        onClose();
        if (isOpen) {
          navigate("/home");
        }
        setModalAlreadyShown(true);
        localStorage.setItem("authModalShown", "true");
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [successPostTokenGoogle, successPostUser, successPostLogin, onClose, navigate, modalAlreadyShown, isOpen]);

  useEffect(() => {
    setShowModalFor2Seconds(isOpen && !modalAlreadyShown);
  }, [isOpen, modalAlreadyShown]);

  useEffect(() => {
    if (modalAlreadyShown) {
      setModalAlreadyShown(false);
      setShowModalFor2Seconds(false);
    }
  }, [modalAlreadyShown]);

  useEffect(() => {
    setShowModalFor2Seconds(false);
  }, [location]);

  return (
    <Modal
      key={location.key}  
      title=""
      open={showModalFor2Seconds}
      onOk={onClose}
      onCancel={onClose}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <LoginRegister />
    </Modal>
  );
};

export default AuthModal;
