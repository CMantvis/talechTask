import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import "../styles/ProductTable.css"

function ProductsList() {

    const [products, setProducts] = useContext(ProductContext);

    const handleDelete = id => {
        setProducts([...products.filter(product => product.id !== id)])
    }

    const noProductStyle = {
        backgroundColor: "#DF1010",
    }

    const tableBody = () => {
        return products.map(product => (
            <tr key={product.id} style={product.quantity > 0 ? null : noProductStyle}>
                <td>{product.name}</td>
                <td>{product.EAN}</td>
                <td>{product.type}</td>
                <td>{product.weight}</td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td><input className="active" type="checkbox" /></td>
                <td>
                    <Link to={`/products/${product.id}`}><button className="view-btn">VIEW</button></Link>
                    <Link to={`/products/${product.id}/edit`}><button className="edit-btn">EDIT</button></Link>
                    <button onClick={() => handleDelete(product.id)} className="delete-btn">DELETE</button>
                </td>
            </tr>
        ))
    }

    const tableHeader = () => {
        return (
            <>
                <th>Name</th>
                <th>EAN</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Color</th>
                <th >Quantity</th>
                <th>Price $</th>
                <th>Active</th>
            </>
        )
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
