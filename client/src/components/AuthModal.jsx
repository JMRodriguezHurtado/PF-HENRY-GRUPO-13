import { useState, useEffect } from "react";
import { Modal } from "antd";
import LoginRegister from "./Login-register/LoginRegister";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isOpen, onClose }) => {
  const successPostTokenGoogle = useSelector((state) => state.successPostTokenGoogle);
  const successPostUser = useSelector((state) => state.successPostUser);
  const successPostLogin = useSelector((state) => state.successPostLogin);

  const [showModalFor2Seconds, setShowModalFor2Seconds] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (successPostTokenGoogle || successPostUser || successPostLogin) {
      setShowModalFor2Seconds(true);

      timer = setTimeout(() => {
        setShowModalFor2Seconds(false);
        onClose();
        navigate('/home');
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [successPostTokenGoogle, successPostUser, successPostLogin, onClose, navigate]);

  return (
    <Modal
      title=""
      visible={isOpen || showModalFor2Seconds}
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