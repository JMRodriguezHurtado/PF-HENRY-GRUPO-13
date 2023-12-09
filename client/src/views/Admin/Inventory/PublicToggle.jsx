import { useState } from "react";
import { useDispatch } from "react-redux";
import Switch from "react-switch";
import { deleteProduct, restoreProduct, updateProduct } from "../../../redux/actions";

const PublicToggle = ({ id, deleted }) => {
  const [toggleSwitch, setToggleSwitch] = useState(!deleted);
  const dispatch = useDispatch();

  const handleChange = (checked) => {
    setToggleSwitch(checked);
    if(deleted){
      if(deleted){
        const product = dispatch(restoreProduct(id))
        dispatch(updateProduct(product))
      }else{
        const delProduct = dispatch(deleteProduct(id))
        dispatch(updateProduct(delProduct))
      }
    }
  } 

  return (
    <Switch
        onChange={handleChange}
        checked={toggleSwitch}
        onColor="#2196f3"/>
  );
};

export default PublicToggle;
