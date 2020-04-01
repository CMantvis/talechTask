import React, { useContext, useState } from 'react';
import { ProductContext } from "../ProductContext";
import { Redirect } from "react-router-dom";
import InputForm from "./InputForm"
function EditProduct({ match }) {

    const productId = match.params.slug;
    const [products, setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.id == productId);
    const [changeValue, setchangeValue] = useState(matchingProduct.length ? matchingProduct[0] : {});
    const { name, EAN, type, weight, color, quantity, price, quantityHistory } = changeValue;
    const [quantityH, setquantityH] = useState([]);

    if (!matchingProduct.length) {
        return <Redirect to="/not-found" push />
    }

    const handleHistory = (value) => {
        setquantityH([value])
        setchangeValue({ ...changeValue, quantityHistory: quantityH })
    }
    console.log(changeValue)

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "quantity") {
            handleHistory(value)
        }
        setchangeValue({
            ...changeValue,
            [name]: value
        });
    }

    const handleSubmit = (changeValue) => {
        if (name === "quantity") {
        }
        setProducts(products.map(product => (product.id === Number(productId) ? changeValue : product)));
    }

    return (
        <div>
            <form onSubmit={() => {
                handleSubmit(changeValue);
            }}>
                <InputForm
                    name={name}
                    EAN={EAN}
                    type={type}
                    weight={weight}
                    color={color}
                    quantity={quantity}
                    price={price}
                    handleChange={handleChange}
                />
                <button onClick={handleHistory}>Save</button>
            </form>
        </div>
    )
}

export default EditProduct;
