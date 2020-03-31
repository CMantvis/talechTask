import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../styles/NewProductStyle.css"

function AddProduct() {
    const [products, setProducts] = useContext(ProductContext)
    
    const initialState = {
        name: "",
        EAN: "",
        type: "",
        weight: "",
        color: "",
        active: false,
        id: products.length+1
    };
    const [input, setInput] = useState(initialState)

    const onChange = e => {
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
                event.preventDefault()
                addProduct(input)
                setInput(initialState)
            }}>
                <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={input.name}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product EAN"
                    name="EAN"
                    value={input.EAN}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product Type"
                    name="type"
                    value={input.type}
                    onChange={onChange}
                />

                <input
                    type="number"
                    placeholder="Product Weight asdasd"
                    name="weight"
                    value={input.weight}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product Color"
                    name="color"
                    value={input.color}
                    onChange={onChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct;