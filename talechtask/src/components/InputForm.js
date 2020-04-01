import React from 'react'

function InputForm(props) {
    return (
        <div>
            <input
                type="text"
                required
                placeholder="Product Name"
                name="name"
                value={props.name}
                onChange={props.handleChange}
            />

            <input
                type="text"
                required
                placeholder="Product EAN"
                name="EAN"
                value={props.EAN}
                onChange={props.handleChange}
            />

            <input
                type="text"
                required
                placeholder="Product Type"
                name="type"
                value={props.type}
                onChange={props.handleChange}
            />

            <input
                type="number"
                required
                placeholder="Product Weight"
                name="weight"
                value={props.weight>0?props.weight:props.weight.slice(0,1)}
                onChange={props.handleChange}
            />

            <input
                type="text"
                required
                placeholder="Product Color"
                name="color"
                value={props.color}
                onChange={props.handleChange}
            />

            <input
                type="number"
                required 
                placeholder="Product Quantity"
                name="quantity"
                value={props.quantity>0?props.quantity:props.quantity.slice(0,1)}
                onChange={props.handleChange}
            />

            <input
                type="number"
                required
                placeholder="Product Price"
                name="price"
                value={props.price>0?props.price:props.price.slice(0,1)}
                onChange={props.handleChange}
            />
    </div>
    )
}

export default InputForm
