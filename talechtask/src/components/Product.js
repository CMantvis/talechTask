import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import {Link } from "react-router-dom"
function Product(props) {

    const {name,EAN,type,weight,color,active} = props.product

    const [products, setProducts] = useContext(ProductContext);

    const handleDelete = EAN => {
        setProducts([...products.filter(product => product.EAN !== EAN)])
    }

    const dusknx = () => {
        return (
            <p>hey</p>
        )
    }

    return (
        
        <div>
            <p>{name} {EAN} {type} {weight} {color}
                <input type="checkbox" />
                <Link to={`/products/${EAN}`}><button>VIEW</button></Link>
                <Link to={`/products/${name}/edit`}><button>EDIT</button></Link>
                <button onClick={() => handleDelete(EAN)} >DELETE</button>
            </p>
            {dusknx()}
        </div>
    )
}

export default Product;
