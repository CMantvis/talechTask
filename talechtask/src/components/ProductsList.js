import React, { useContext } from 'react';
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";

function ProductsList() {
    const [products, setProducts] = useContext(ProductContext);
    
    const handleDelete = id => {
        setProducts([...products.filter(product => product.id !== id)]);
    }

    const handleActive = id => {
        setProducts([...products.map(product => {
            if (product.id === id) {
                product.active = !product.active
            }
            return product
        })])
    }

    const noProductStyle = {
        backgroundColor: "#DF1010",
    }
    
    const btnStyle = {
        width:"63px"
    }

    const tableBody = () => {
        return products.map(product => (
            <tr key={product.id} >
                <td>{product.name}</td>
                <td>{product.EAN}</td>
                <td>{product.type}</td>
                <td>{product.weight}</td>
                <td>{product.color}</td>
                <td style={product.quantity > 0 ? null : noProductStyle}>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                    <input className="active"
                        type="checkbox"
                        style={{height:"18px",width:"18px"}}
                        onChange={() => handleActive(product.id)}
                        checked={product.active && true} />
                </td>
                <td>
                    <div >
                    <Link to={`/products/${product.id}`}>
                        <button type="button" className="btn btn-secondary btn-sm" style={btnStyle}>VIEW</button>
                        </Link>
                    <Link to={`/products/${product.id}/edit`}>
                        <button type="button" className="btn btn-primary btn-sm" style={btnStyle}>EDIT</button>
                        </Link>
                    <button onClick={() => handleDelete(product.id)} type="button"className="btn btn-danger btn-sm">DELETE</button>
                    </div>
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
        <div className="table-responsive-sm">
            <table className="table table-hover">
                <tbody>
                    <tr>{tableHeader()}</tr>
                    {tableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;
