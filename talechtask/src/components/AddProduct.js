import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../styles/NewProductStyle.css";
import InputForm from "./InputForm";

function AddProduct() {
    const [products, setProducts] = useContext(ProductContext);
    const initialState = {
        name: "",
        EAN: "",
        type: "",
        weight: "",
        color: "",
        quantity: "",
        price: "",
        active: true,
        id: products.length + 1
    };

    const [input, setInput] = useState(initialState);
    const { name, EAN, type, weight, color, quantity, price} = input;

    const handleChange = e => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const addProduct = product => {
        setProducts([...products, product])
    }

    return (
        <form
        style={{width:"400px",margin:"auto"}} 
        onSubmit={event => {
            event.preventDefault();
            addProduct(input);
            setInput(initialState);
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
            <button type="submit" className="btn btn-success" style={{marginTop:"25px"}}>Add product</button>
        </form>
    )
}

export default AddProduct;