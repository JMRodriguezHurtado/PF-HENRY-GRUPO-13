import Items from "./Items"
import Title from "./Title"


const Inventory = ({products}) => {
    return (
        <table>
        <Title/>
        <Items products={products}/>
    </table>
    )
}

export default Inventory