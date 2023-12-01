import { useDispatch } from "react-redux"
import { getAllProducts } from "../../redux/actions"


const ShowStock = () =>{
    const dispatch = useDispatch()
    const stock = dispatch(getAllProducts())
    console.log(stock)
}

export default ShowStock