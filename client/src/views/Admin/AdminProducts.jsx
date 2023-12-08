import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selection from "../../components/Selection/Selection.jsx";
import { getAllProducts, getDeletedProducts } from "../../redux/actions.js";
import Inventory from "./Inventory/Inventory.jsx";

const AdminProducts = () => {
    const products = useSelector((state) => state.products?.results);
    const deletedProducts = useSelector(state => state.products?.results)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
        dispatch(getDeletedProducts())
    },[dispatch])
    return (
        <div>
            <Selection />
            <Inventory products={products} title={"Productos disponibles"}/>
            <Inventory products={deletedProducts} title={"Productos eliminados"}/>
        </div>
    )
}

export default AdminProducts;