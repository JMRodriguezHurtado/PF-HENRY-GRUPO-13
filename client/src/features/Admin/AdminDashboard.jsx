import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWholeMerchandise } from "../../redux/actions"
import Inventory from "./Components/Inventory/Inventory"


const AdminDashboard = () => {
    const products = useSelector(state => state?.merchandise)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWholeMerchandise())
    },[])
    return(
        <Inventory products={products}/>
    )
}

export default AdminDashboard