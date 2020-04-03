import React, { useContext, useState} from 'react';
import { ProductContext } from "../ProductContext";
import PriceHistoryGraph from "./graphs/PriceHistoryGraph";
import QuantityHistoryGraph from "./graphs/QuantityHistoryGraph";

function ProductView({ match }) {

    const [products] = useContext(ProductContext);
    const [productDetails, setProductDetails] = useState(false);
    const [priceHistory, setPriceHistory] = useState(false);
    const [quantityHistory, setQuantityHistory] = useState(false);
    const matchingProduct = products.filter(product => product.id === Number(match.params.slug));

    const renderProduct = () => {
        return matchingProduct.map(item => (
            <div key={item.id} id="productDetail" className="col-2">
                <p>Name: {item.name}</p>
                <p>EAN: {item.EAN}</p>
                <p>Type: {item.type}</p>
                <p>Weight: {item.weight}</p>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}$</p>
                <p>Active: {item.active ? "Active" : "Disabled"}</p>
            </div>
        ))
    }

    return (
        <div className="container">
            <button className="btn btn-outline-secondary"
                onClick={() => setProductDetails(!productDetails)}>Product details
            </button>
            <button className="btn btn-outline-secondary"
                onClick={() => setPriceHistory(!priceHistory)}>Price history
            </button>
            <button className="btn btn-outline-secondary"
                onClick={() => setQuantityHistory(!quantityHistory)}>Quantity history
            </button>

            <div className="row" style={{ margin: "40px" }}>
                {
                    productDetails &&
                    renderProduct()
                }
                {
                    priceHistory &&
                    <PriceHistoryGraph
                        priceHistory={matchingProduct[0].priceHistory}
                        priceHistoryDate={matchingProduct[0].priceHistoryDate} />
                }
                {
                    quantityHistory && <QuantityHistoryGraph
                        quantityHistory={matchingProduct[0].quantityHistory}
                        quantityHistoryDate={matchingProduct[0].quantityHistoryDate} />
                }
            </div>
        </div>
    )
}

export default ProductView;
