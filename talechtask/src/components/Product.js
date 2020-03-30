import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import {Link } from "react-router-dom"
function Product({ name, EAN, type, weight, color, active }) {

    const [products, setProducts] = useContext(ProductContext);

    const handleDelete = EAN => {
        setProducts([...products.filter(product => product.EAN !== EAN)])
    }

    return (
        <div>
            <p>{name} {EAN} {type} {weight} {color}
                <input type="checkbox" />
                <Link to={`/products/${EAN}`}><button>VIEW</button></Link>
                <Link to={`/products/${name}/edit`}><button>EDIT</button></Link>
                <button onClick={() => handleDelete(EAN)} >DELETE</button>
            </p>

        </div>
    )
}

export default Product;
