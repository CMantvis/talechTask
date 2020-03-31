import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../styles/NewProductStyle.css";

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
        active: false,
        id: products.length + 1
    };

    const [input, setInput] = useState(initialState);
    const { name, EAN, type, weight, color, quantity, price, id } = input;

    const handleChange = e => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const addProduct = product => {
        setProducts([...products, product])
    }

    return (
        <div>
            <h3>Fill the required fields</h3>
            <form onSubmit={event => {
                event.preventDefault();
                addProduct(input);
                setInput(initialState);
            }}>
                <input
                    type="text"
                    required
                    placeholder="Product Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    required
                    placeholder="Product EAN"
                    name="EAN"
                    value={EAN}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    required
                    placeholder="Product Type"
                    name="type"
                    value={type}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    required
                    placeholder="Product Weight"
                    name="weight"
                    value={weight>0?weight:weight.slice(0,1)}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    required
                    placeholder="Product Color"
                    name="color"
                    value={color}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    required 
                    placeholder="Product Quantity"
                    name="quantity"
                    value={quantity>0?quantity:quantity.slice(0,1)}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    required
                    placeholder="Product Price"
                    name="price"
                    value={price>0?price:price.slice(0,1)}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct;