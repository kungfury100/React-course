import React, { useEffect, useState } from 'react';

function Cars() {
  const [products, setProducts] = useState([]);
  const [searchedField, setSearchedField] = useState('');

  useEffect(() => {
    const query = searchedField ? `&q=${encodeURIComponent(searchedField)}` : '';
    fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100${query}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json.results || []));
  }, [searchedField]);

  const search = (searched) => {
    if (searched === '') {
      return;
    }
    setSearchedField(searched);
  };

  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={searchedField} onChange={(e) => search(e.target.value)} type="text" /> <br />
      <table>
        <thead>
          <tr>
            <th>Mark</th>
            <th>Mudel</th>
            <th>Aasta</th>
            <th>Kütus</th>
            <th>Kererüüp</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.recordid || product.id || index}>
              <td>{product.make}</td>
              <td>{product.model}</td>
              <td>{product.year}</td>
              <td>{product.fueltype1}</td>
              <td>{product.vclass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cars;