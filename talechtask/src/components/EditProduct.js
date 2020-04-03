import React, { useContext, useState,useEffect } from 'react';
import { ProductContext } from "../ProductContext";
import { Redirect } from "react-router-dom";
import InputForm from "./InputForm";

function EditProduct({ match }) {
    const productId = match.params.slug;
    const [products, setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.id === Number(productId));
    const [changeValue, setChangeValue] = useState(matchingProduct.length ? matchingProduct[0] : {});
    const { name, EAN, type, weight, color, quantity, price } = changeValue;
    const [quantityH, setQuantityH] = useState([]);
    const [quantityDate,setQuantityDate] = useState();
    const [priceH,setPriceH] = useState([]);
    const [priceDate,setPriceDate] = useState();
    
    useEffect(() => {
        getQuantityDate();
    },[quantity])

    useEffect(() => {
        getPriceDate();
    },[price])

    if (!matchingProduct.length) {
        return <Redirect to="/not-found" push />
    }

    const handleCancel = () => {
        setChangeValue(...matchingProduct);
    }

    const getPriceDate = () => {
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        setPriceDate(currentDate);
    }

    const getQuantityDate = () => {
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        setQuantityDate(currentDate);
    }

    const handleHistory = () => {  
        setChangeValue({ ...changeValue,
             quantityHistory: [...changeValue.quantityHistory,...quantityH],
             priceHistory:[...changeValue.priceHistory,...priceH],
             priceHistoryDate:[...changeValue.priceHistoryDate,priceDate],
             quantityHistoryDate:[...changeValue.quantityHistoryDate,quantityDate],
             }) ;
    } 

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "quantity") {
            setQuantityH([value]);
        }
        if (name ==="price") {
            setPriceH([value]);
        }
        setChangeValue({
            ...changeValue,
            [name]: value
        });
    }

    const handleSubmit = (changeValue) => {
        setProducts(products.map(product => (product.id === Number(productId) ? changeValue : product)));
    }

    return (
        <div>
            <form 
            style={{width:"400px",margin:"auto"}}
            onSubmit={() => {
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
                <div className="row" style={{justifyContent:"space-around"}}>
                <button onClick={handleHistory} className="btn btn-primary" style={{marginTop:"25px"}}>Save</button>
                <button onClick={handleCancel}  className="btn btn-secondary" style={{marginTop:"25px"}}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;