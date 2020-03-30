import React, { useContext,useReducer } from 'react';
import { ProductContext } from "../ProductContext";

function EditProduct({match}) {

    const [products,setProducts] = useContext(ProductContext);
    const matchingProduct = products.filter(product => product.EAN ==match.params.slug)
    const {name,EAN,type,weight,color,active} = matchingProduct[0]

    const onChange = e => {
        
    }
    
    return (
        <div>
            <form>
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
                />

                <input
                    type="text"
                    name="type"
                    value={type}                   
                />

                <input
                    type="number"               
                    name="weight"
                    value={weight}                    
                />

                <input
                    type="text"   
                    name="color"
                    value={color}
            
                />
                <button>Save</button>
                </form>
        </div>
    )
}

export default EditProduct
