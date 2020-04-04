import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../ProductContext";
import InputForm from "./InputForm";

function AddProduct() {
    const [products, setProducts] = useContext(ProductContext);
    const [date, setDate] = useState()
    const [name, setName] = useState("");
    const [EAN, setEAN] = useState("");
    const [type, setType] = useState("");
    const [weight, setWeight] = useState("");
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        handleDate();
    }, [quantity, price])

    const handleDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10)
        setDate(currentDate)
    }

    const handleName = e => {
        setName(e.currentTarget.value);
    }

    const handleEAN = e => {
        setEAN(e.currentTarget.value);
    }

    const handleType = e => {
        setType(e.currentTarget.value);
    }

    const handleWeight = e => {
        setWeight(e.currentTarget.value);
    }

    const handleColor = e => {
        setColor(e.currentTarget.value);
    }

    const handleQuantity = e => {
        setQuantity(e.currentTarget.value);
    }

    const handlePrice = e => {
        setPrice(e.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setProducts([...products, {
            name: name,
            EAN: EAN,
            type: type,
            weight: weight,
            color: color,
            quantity: quantity,
            quantityHistory: [quantity],
            quantityHistoryDate: [date],
            price: price,
            priceHistory: [price],
            priceHistoryDate: [date],
            active: true,
            id: products.length + 1
        }]);
        setName("");
        setEAN("");
        setType("")
        setWeight("");
        setColor("");
        setQuantity("");
        setPrice("");
    }

    return (
        <form
            style={{ width: "400px", margin: "auto" }}
            onSubmit={handleSubmit}>
            <InputForm
                name={name}
                EAN={EAN}
                type={type}
                weight={weight}
                color={color}
                quantity={quantity}
                price={price}
                handleName={handleName}
                handleEAN={handleEAN}
                handleType={handleType}
                handleWeight={handleWeight}
                handleColor={handleColor}
                handleQuantity={handleQuantity}
                handlePrice={handlePrice}
            />
            <button type="submit" className="btn btn-success" style={{ marginTop: "25px" }}>Add product</button>
        </form>
    )
}

export default AddProduct;