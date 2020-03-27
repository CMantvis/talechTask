import React, { useReducer, useContext } from "react";
import { ProductContext } from "../ProductContext";

const initialState = {
    name: "",
    EAN: "",
    type: "",
    weight: "",
    color: "",
    active: false
};

const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

function AddProduct() {
    const [products, setProducts] = useContext(ProductContext)

    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, EAN, type, weight, color, active } = state;

    const onChange = e => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    };

    const addProduct = e => {
        e.preventDefault();
        setProducts([...products, state])
        dispatch({ type: "reset" });
    };

    return (
        <div>
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product EAN"
                    name="EAN"
                    value={EAN}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product Type"
                    name="type"
                    value={type}
                    onChange={onChange}
                />

                <input
                    type="number"
                    placeholder="Product Weight asdasd"
                    name="weight"
                    value={weight}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Product Color"
                    name="color"
                    value={color}
                    onChange={onChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct;