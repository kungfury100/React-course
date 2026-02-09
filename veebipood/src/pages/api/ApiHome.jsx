import React from 'react'
import { Link } from 'react-router-dom'

function ApiHome() {
  return (
    <div>
       <Link to="/cars">
            <button>Cars</button>
        </Link>
        <Link to="/books">
            <button>Books</button>
        </Link>
        <Link to="/countries">
            <button>Countries</button>
        </Link>
         <Link to="/floods">
            <button>Floods</button>
        </Link>
         <Link to="/supplier1">
            <button>Supplier1</button>
        </Link>
         <Link to="/supplier2">
            <button>Supplier2</button>
        </Link>
        <Link to="/supplier3">
            <button>Supplier3</button>
        </Link>
        <Link to="/vocabulary">
            <button>Vocabulary</button>
        </Link>
    </div>
  )
}

export default ApiHome