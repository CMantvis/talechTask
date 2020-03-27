import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import Product from "./Product";

function ProductsList() {
    const [products, setProducts] = useContext(ProductContext);
    console.log(products);
    return (
        <div>
            {
                products.map(product => (
                    <Product key={product.EAN} EAN={product.EAN} name={product.name} type={product.type}
                        weight={product.weight} color={product.color} active={product.active}
                    />
                ))
            }
        </div>
    )
}

export default ProductsList;
