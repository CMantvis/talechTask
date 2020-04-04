import React, { useContext, useState,useEffect } from 'react';
import { ProductContext } from "../ProductContext";
import { Redirect } from "react-router-dom";
import InputForm from "./InputForm";

function EditProduct({ match }) {
    const productId = match.params.slug;
    const [products, setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.id === Number(productId));
    const [quantityDate,setQuantityDate] = useState();
    const [priceDate,setPriceDate] = useState();
    const [hasPriceChanged, setHasPriceChanged] = useState(false);
    const [hasQuantityChanged, setHasQuantityChanged] = useState(false)
    const [name, setName] = useState(matchingProduct.length ? matchingProduct[0].name : {});
    const [EAN, setEAN] = useState(matchingProduct.length ? matchingProduct[0].EAN : {});
    const [type, setType] = useState(matchingProduct.length ? matchingProduct[0].type : {});
    const [weight, setWeight] = useState(matchingProduct.length ? matchingProduct[0].weight : {});
    const [color, setColor] = useState(matchingProduct.length ? matchingProduct[0].color : {});
    const [quantity, setQuantity] = useState(matchingProduct.length ? matchingProduct[0].quantity : {});
    const [price, setPrice] = useState(matchingProduct.length ? matchingProduct[0].price : {});
    
    if (!matchingProduct.length) {
        return <Redirect to="/not-found" push />
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setName(matchingProduct[0].name);
        setEAN(matchingProduct[0].EAN);
        setType(matchingProduct[0].type);
        setWeight(matchingProduct[0].weight);
        setColor(matchingProduct[0].color);
        setQuantity(matchingProduct[0].quantity);
        setPrice(matchingProduct[0].price);
    }

    const getPriceDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        setPriceDate(currentDate);
    }

    const getQuantityDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        setQuantityDate(currentDate);
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
        getQuantityDate();
        setHasQuantityChanged(true);
    }

    const handlePrice = e => {
        setPrice(e.currentTarget.value);
        getPriceDate();
        setHasPriceChanged(true);
    }

    const handleSubmit = () => {
        setProducts(products.map(product => (product.id === Number(productId) ? 
        {name:name,
        EAN:EAN,
        type:type,
        weight:weight,
        color:color,
        quantity:quantity,
        quantityHistory: [...(hasQuantityChanged ?
            [...matchingProduct[0].quantityHistory,quantity]
            : matchingProduct[0].quantityHistory
            )],

        quantityHistoryDate: [... (hasQuantityChanged ? 
            [...matchingProduct[0].quantityHistoryDate,quantityDate]
            : matchingProduct[0].quantityHistoryDate)],
            
        price:price,
        priceHistory: [...(hasPriceChanged ?
            [...matchingProduct[0].priceHistory,price]
            : matchingProduct[0].priceHistory
            )],

        priceHistoryDate: [... (hasPriceChanged ? 
            [...matchingProduct[0].priceHistoryDate,priceDate]
            : matchingProduct[0].priceHistoryDate)],

        id: matchingProduct[0].id,
        active: matchingProduct[0].active
        } 
        : product)));
        setHasPriceChanged(false);
        setHasQuantityChanged(false);
    }

    return (
        <div>
            <form 
            style={{width:"400px",margin:"auto"}}
            onSubmit={handleSubmit}
            >
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
                <div className="row" style={{justifyContent:"space-around"}}>
                <button className="btn btn-primary" style={{marginTop:"25px"}}>Save</button>
                <button onClick={handleCancel}  className="btn btn-secondary" style={{marginTop:"25px"}}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;