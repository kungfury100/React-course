import React, { useEffect, useState } from 'react'

function Supplier2() {
  const [products, setProducts] = useState([]);

// uef
useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
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
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td><img src={product.images} className="pilt" alt="" /></td>
                            <td>{product.category.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  )
}

export default Supplier2