import React, { useContext, useState } from 'react';
import { ProductContext } from "../ProductContext";
import { Redirect } from "react-router-dom";

function EditProduct({ match }) {

    const productId = match.params.slug;
    const [products, setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.id == productId);
    const [changeValue, setchangeValue] = useState(matchingProduct.length ? matchingProduct[0] : {});
    const { name, EAN, type, weight, color, quantity, price,quantityHistory } = changeValue;
    console.log(matchingProduct)
    const [quantityH,setquantityH] = useState([]);

    if (!matchingProduct.length) {
        return <Redirect to="/not-found" push />
    }

    const handleHistory = (value) => {
        setquantityH([...quantityH,value])
        setchangeValue({...changeValue,quantityHistory:quantityH.splice(-1)})
    }
    console.log(quantityH)

    const handleChange = e => {
        const { name, value } = e.target;
        if(name==="quantity") {
            handleHistory(value)
        }
        setchangeValue({
            ...changeValue,
        [name]: value
        });
    }

    const handleSubmit = (changeValue) => {
        if(name==="quantity") {
        }
        setProducts(products.map(product => (product.id === Number(productId) ? changeValue : product)));
    }

    return (
        <div>
            <form onSubmit={() => {
                handleSubmit(changeValue);
            }}>
                <input
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}

                />
                <input
                    type="text"
                    required
                    name="EAN"
                    value={EAN}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    required
                    name="type"
                    value={type}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    required
                    name="weight"
                    value={weight}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    required
                    name="color"
                    value={color}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    required
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    required
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
                <button onClick={handleHistory}>Save</button>
            </form>
        </div>
    )
}

export default EditProduct;
