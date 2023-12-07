import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getWholeMerchandise } from "../../redux/actions"
import Inventory from "./Components/Inventory/Inventory"
import { products } from "./products"


const AdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWholeMerchandise())
    },[])
    return(
        <Inventory products={products}/>
    )
}

export default AdminDashboard