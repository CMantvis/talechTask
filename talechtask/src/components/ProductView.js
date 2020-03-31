import React, { useContext,useState } from 'react';
import { ProductContext } from "../ProductContext";

function ProductView({match}) {

    const [products] = useContext(ProductContext);

    const [productDetails,setProductDetails] = useState(false);
    const [priceHistory, setPriceHistory] = useState(false);
    const [quantityHistory, setQuantityHistory] = useState(false);

    const matchingProduct = products.filter(product => product.id === Number(match.params.slug));

    const renderProduct = () => {
        return matchingProduct.map(item => (
            <div key={item.id}>
                <h3 >Name: {item.name}</h3>
                <h3 >EAN: {item.EAN}</h3>
                <h3 >Type: {item.type}</h3>
                <h3 >Weight: {item.weight}</h3>
                <h3 >Color: {item.color}</h3>
                <h3>Quantity: {item.quantity}</h3>
                <h3>Price: {item.price}$</h3>
                <h3 >Active: {item.active?"Active":"Disabled"}</h3>
            </div>
        ))
    }

    return (
        <div>
            <button onClick={ () => setProductDetails(!productDetails)}>Product details</button>
            <button onClick={ () => setPriceHistory(!priceHistory)}>Price history</button>
            <button onClick={ () => setQuantityHistory(!quantityHistory)}>Quantity history</button>

            { productDetails &&
        renderProduct()
           }
        {
            priceHistory && <div>hello</div>
        }
        {
            quantityHistory && <div>GoodBye</div>
        }

        </div>
    )

}

export default ProductView;
