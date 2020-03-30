import React, { useState, createContext, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {

    const defaultData = [
        {
            name: "Banana",
            EAN: 12345,
            type: "Fruit",
            weight: 100,
            color: "Yellow",
            active: false
        },
        {
            name: "Apple",
            EAN: 85645,
            type: "Fruit",
            weight: 60,
            color: "Red",
            active: false
        },
        {
            name: "Chair",
            EAN: 123435,
            type: "Furniture",
            weight: 1500,
            color: "Brown",
            active: false
        },
        {
            name: "Desk",
            EAN: 97867,
            type: "Furniture",
            weight: 6800,
            color: "Black",
            active: false
        }
    ];

    const initialData = JSON.parse(window.localStorage.getItem("products"));
    const [products, setProducts] = useState(initialData || defaultData);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products]);
    
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
