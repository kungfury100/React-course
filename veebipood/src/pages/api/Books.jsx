import React, { useEffect, useState } from 'react';

function Books() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);  
  const [searchedField, setSearchedField] = useState("react");

  // uef
  useEffect(() => {
    // fetch("https://api.itbook.store/1.0/search/"+searchedField+"?page=" + page)
    fetch(`https://api.itbook.store/1.0/search/${searchedField}?page=${page}`)
      .then((res) => res.json())
      .then((json) => setProducts(json.books));
  }, [page, searchedField]);

  const search = (searched) => {
    if (searched === "") {
      return;
    }
    setSearchedField(searched);
  }

  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={searchedField} onChange={(e) => search(e.target.value)} type="text" /> <br />
      <table>
        <thead>
          <tr>
            <th>Raamatu ID</th>
            <th>Raamatu nimi</th>
            <th>Raamatu hind</th>
            <th>Raamatu pilt</th>
            <th>Osta raamat</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.isbn13}>
              <td>{product.isbn13}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={product.images}
                  className="pilt"
                  alt=""
                />
              </td>
              <td>
                <a href={product.url} target="_blank" rel="noreferrer">
                  Ava link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPage(page - 1)}>Eelmine leht</button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)}>Järgmine leht</button>
    </div>
  );
}

export default Books;
