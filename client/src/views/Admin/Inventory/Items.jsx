import Item from "./Item"

const Items = ({products, deletedProducts}) => {
    return(
        <tbody>
            <h2>Availbles:</h2>
            {products?.map((product, index) => {
                return product.deleted === false && <Item key={index} product={product}/>})
            }
        </tbody>
    )
}

export default Items