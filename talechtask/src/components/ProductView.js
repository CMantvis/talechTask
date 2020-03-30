import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";

function ProductView({match}) {

    // const retrievedProducts = localStorage.getItem("products");
    // const parsedProducts = JSON.parse(retrievedProducts)
    // const matchingProduct = parsedProducts.filter(product => product.EAN ==match.params.slug)

    const [products] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.EAN ==match.params.slug)

    const renderProduct = () => {
        return matchingProduct.map(item => (
            <div key={Math.random()}>
                <h3 key={Math.random()}>Name: {item.name}</h3>
                <h3 key={Math.random()}>EAN: {item.EAN}</h3>
                <h3 key={Math.random()}>Type: {item.type}</h3>
                <h3 key={Math.random()}>Weight: {item.weight}</h3>
                <h3 key={Math.random()}>Color: {item.color}</h3>
                <h3 key={Math.random()}>Active: {item.active?"active":"disabled"}</h3>
            </div>
        ))
    }

    return (
        <div>
            {
                renderProduct()
            }
        </div>
    )

}

export default ProductView
