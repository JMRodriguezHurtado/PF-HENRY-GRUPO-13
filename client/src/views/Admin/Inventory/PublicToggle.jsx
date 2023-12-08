import { useState } from "react";
import { useDispatch } from "react-redux";
import Switch from "react-switch";
import { deleteProduct } from "../../../redux/actions";

const PublicToggle = ({ id }) => {
  const [toggleSwitch, setToggleSwitch] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (checked) => {
    setToggleSwitch(checked);
    dispatch(deleteProduct(id));
  };

  return (
    <label>
      <Switch
        onChange={handleChange}
        checked={toggleSwitch}
        onColor="#2196f3"/>
    </label>
  );
};

export default PublicToggle;
