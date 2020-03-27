import React, { useState, createContext, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {

    const [products, setProducts] = useState([
        {
            name: "Banana",
            EAN: Math.random(),
            type: "Fruit",
            weight: 100,
            color: "Yellow",
            active: false
        },
        {
            name: "Apple",
            EAN: Math.random(),
            type: "Fruit",
            weight: 60,
            color: "Red",
            active: false
        },
        {
            name: "Chair",
            EAN: Math.random(),
            type: "Furniture",
            weight: 1500,
            color: "Brown",
            active: false
        },
        {
            name: "Desk",
            EAN: Math.random(),
            type: "Furniture",
            weight: 6800,
            color: "Black",
            active: false
        }
    ]);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
