import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getDeletedProducts } from "../../../redux/actions"
import Header from "./Header"
import Items from "./Items"

const Inventory = () => {
    const titles = ["Nombre", "Precio", "Cantidad", "Publicado"]
    const products = useSelector(state => state.products?.results)
    const deletedProducts = useSelector(state => state)
    console.log("DeltedProducts: ", deletedProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
        dispatch(getDeletedProducts())
    },[dispatch])
    console.log("Products", products)
    return (
        <table className="w-full table-auto border-collapse">
            <Header titles={titles}/>
            <Items products={products} deletedProducts={deletedProducts}/>
        </table>
    )
}

export default Inventory