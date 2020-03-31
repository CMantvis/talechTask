import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import "../styles/ProductTable.css"

function ProductsList() {
    const [products, setProducts] = useContext(ProductContext);

    const handleDelete = EAN => {
        setProducts([...products.filter(product => product.EAN !== EAN)])
    }

    const tableBody = () => {
        return products.map(product => (
            <tr key={product.EAN}>
                <td>{product.name}</td>
                <td>{product.EAN}</td>
                <td>{product.type}</td>
                <td>{product.weight}</td>
                <td>{product.color}</td>
                <td><input className="active" type="checkbox" /></td>
                <td>
                    <Link to={`/products/${product.id}`}><button className="view-btn">VIEW</button></Link>
                    <Link to={`/products/${product.id}/edit`}><button className="edit-btn">EDIT</button></Link>
                    <button onClick={() => handleDelete(product.EAN)} className="delete-btn">DELETE</button>
                </td>
            </tr>
        ))
    }

    const tableHeader = () => {
        let header = Object.keys(products[0])
        return header.map((key, index) => (
            <th key={index}>{key.toUpperCase()}</th>
        ))
    }

    return (
        <div>
            <table id="products">
                <tbody>
                    <tr>{tableHeader()}</tr>
                    {tableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;
