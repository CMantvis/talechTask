import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";

function Product({ name, EAN, type, weight, color, active }) {

    const [products, setProducts] = useContext(ProductContext);

    const handleDelete = EAN => {
        setProducts([...products.filter(product => product.EAN !== EAN)])
    }

    return (
        <div>
            <p>{name} {EAN} {type} {weight} {color}
                <input type="checkbox" />
                <button>VIEW</button>
                <button>EDIT</button>
                <button onClick={() => handleDelete(EAN)} >DELETE</button>
            </p>

        </div>
    )
}

export default Product;
