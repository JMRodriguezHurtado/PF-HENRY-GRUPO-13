import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions"
import Inventory from "./Components/Inventory/Inventory"


const AdminDashboard = () => {
    const products = useSelector(state => state?.results)
    const dispatch = useDispatch()
    console.log(products)
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    return(
        <Inventory/>
    )
}

export default AdminDashboard