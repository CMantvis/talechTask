import React from 'react'
import {Link} from "react-router-dom"
function ErrorPage() {
    return (
        <div>
            <h2>Product with your ID was not found</h2>
            <Link to="/"><button>Return Home</button></Link>
        </div>
    )
}

export default ErrorPage
