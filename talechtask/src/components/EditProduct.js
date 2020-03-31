import React, { useContext,useState } from 'react';
import { ProductContext } from "../ProductContext";
import {Redirect} from "react-router-dom"

function EditProduct({match}) {

    const productId =match.params.slug
    const [products,setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.id ==productId)
    const [changeValue,setchangeValue] = useState(matchingProduct.length?matchingProduct[0]:{})
    const {name,EAN,type,weight,color} = changeValue


    if (!matchingProduct.length) {
        return <Redirect to="/" push />
    }

      const onChange = e => {
        const { name, value } = e.target
        setchangeValue({
            ...changeValue,
            [name]: value
          });
    }

    const handleSubmit = (changeValue) => {
        setProducts(products.map(product=> (product.id === Number(productId)? changeValue:product)))
        
    }



    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            handleSubmit(changeValue) 
            }}>
            <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    
                />

                <input
                    type="text"
                    name="EAN"
                    value={EAN}
                    onChange={onChange}
                />

                <input
                    type="text"
                    name="type"
                    value={type}
                    onChange={onChange}                   
                />

                <input
                    type="number"               
                    name="weight"
                    value={weight}
                    onChange={onChange}                    
                />

                <input
                    type="text"   
                    name="color"
                    value={color}
                    onChange={onChange}
                />
                <button>Save</button>
                </form>
            
        </div>
    )
}

export default EditProduct
