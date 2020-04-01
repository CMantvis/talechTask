import React from 'react'

function InputForm(props) {
    return (
        <>
            <label htmlFor="name" style={{marginTop:"40px"}}>Name</label>
            <input
                type="text"
                required
                placeholder="Product Name"
                name="name"
                id="name"
                value={props.name}
                onChange={props.handleChange}
                className="form-control"
                
            />
            <label htmlFor="EAN">EAN</label>
            <input
                type="text"
                required
                placeholder="Product EAN"
                name="EAN"
                id="EAN"
                value={props.EAN}
                onChange={props.handleChange}
                className="form-control"
            />
            <label htmlFor="type">Type</label>
            <input
                type="text"
                required
                placeholder="Product Type"
                name="type"
                id="type"
                value={props.type}
                onChange={props.handleChange}
                className="form-control"
            />
            <label htmlFor="weight">Weight</label>
            <input
                type="number"
                required
                placeholder="Product Weight"
                name="weight"
                id="weight"
                value={props.weight > 0 ? props.weight : props.weight.slice(0, 1)}
                onChange={props.handleChange}
                className="form-control"
            />
            <label htmlFor="color">Color</label>
            <input
                type="text"
                required
                placeholder="Product Color"
                name="color"
                id="color"
                value={props.color}
                onChange={props.handleChange}
                className="form-control"
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                required
                placeholder="Product Quantity"
                name="quantity"
                id="quantity"
                value={props.quantity > 0 ? props.quantity : props.quantity.slice(0, 1)}
                onChange={props.handleChange}
                className="form-control"
            />
            <label htmlFor="price">Price</label>
            <input
                type="number"
                required
                placeholder="Product Price"
                name="price"
                id="price"
                value={props.price > 0 ? props.price : props.price.slice(0, 1)}
                onChange={props.handleChange}
                className="form-control"
            />
        </>
    )
}

export default InputForm
