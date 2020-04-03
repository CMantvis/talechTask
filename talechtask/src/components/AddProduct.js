import React, { useState, useContext,useEffect } from "react";
import { ProductContext } from "../ProductContext";
import InputForm from "./InputForm";

function AddProduct() {
    const [products, setProducts] = useContext(ProductContext);
    const [date,setDate] = useState()
    const initialState = {
        name: "",
        EAN: "",
        type: "",
        weight: "",
        color: "",
        quantity: "",
        quantityHistory: [],
        quantityHistoryDate: [],
        price: "",
        priceHistory: [],
        priceHistoryDate: [],
        active: true,
        id: products.length + 1
    };

    const [input, setInput] = useState(initialState);
    const { name, EAN, type, weight, color, quantity, price} = input;

    useEffect(()=> {
        handleDate();
    },[quantity,price])

    const handleDate = () => {
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        setDate(currentDate)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setInput({ ...input,
            [name]: value,
            quantityHistory:[quantity],
            priceHistory:[price],
            quantityHistoryDate:[date],
            priceHistoryDate:[date]
         });
    }

    const addProduct = product => {
        setProducts([...products, product,]);
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