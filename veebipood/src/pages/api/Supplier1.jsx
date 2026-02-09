import React, { useEffect, useState } from 'react'

function Supplier1() {
  const [products, setProducts] = useState([]);

// uef
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => setProducts(json));
}, []);

  return (
    <div>
      <table>
                <thead>
                    <tr>
                        <th>Toote ID</th>
                        <th>Toote nimi</th>
                        <th>Toote hind</th>
                        <th>Toote pilt</th>
                        <th>Toote kategooria</th>
                        <th>Toote hinne</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td><img src={product.image} className="pilt" alt="" /></td>
                            <td>{product.category}</td>
                            <td>{product.rating.rate} / {product.rating.count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  )
}

export default Supplier1