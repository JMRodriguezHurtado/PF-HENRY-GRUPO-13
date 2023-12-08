import Header from "./Header";
import Items from "./Items";

const Inventory = ({ title, products }) => {
    const titles = ["Nombre", "Precio", "Cantidad", "Publicado"];

    return (
        <div className="mx-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <caption className="text-lg font-semibold p-2">{title}</caption>
                    <Header titles={titles} />
                    <Items products={products} />
                </table>
            </div>
        </div>
    );
};

export default Inventory;
