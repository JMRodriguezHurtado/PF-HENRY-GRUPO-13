import { products } from "../../products"
import Header from "./Header"
import Items from "./Items"
import titles from "./titles"


const Inventory = () => {
    return (
        <table>
            <Header titles={titles}/>
            <Items products={products}/>
        </table>
    )
}

export default Inventory