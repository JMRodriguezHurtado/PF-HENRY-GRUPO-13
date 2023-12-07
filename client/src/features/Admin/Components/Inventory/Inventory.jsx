import { products } from "../../products"
import Header from "./Header"
import Items from "./Items"
import titles from "./titles"


const Inventory = () => {
    return (
        <table className="w-full table-auto border-collapse">
            <Header titles={titles}/>
            <Items products={products}/>
        </table>
    )
}

export default Inventory