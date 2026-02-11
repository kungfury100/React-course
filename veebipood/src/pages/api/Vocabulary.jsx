import React, { useEffect, useState } from 'react';

function Vocabulary() {
  const [items, setItems] = useState([]);
  const [searchedField, setSearchedField] = useState('');

  useEffect(() => {
    fetch('https://marineregions.org/rest/getGazetteerTypes.json')
      .then((res) => res.json())
      .then((json) => setItems(Array.isArray(json) ? json : []));
  }, []);

  const search = (searched) => {
    setSearchedField(searched);
  };

  const filteredItems = items.filter((item) => {
    if (searchedField === '') {
      return true;
    }
    const needle = searchedField.toLowerCase();
    const type = (item.type || '').toLowerCase();
    const description = (item.description || '').toLowerCase();
    return type.includes(needle) || description.includes(needle);
  });

  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={searchedField} onChange={(e) => search(e.target.value)} type="text" /> <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tüüp</th>
            <th>Kirjeldus</th>
          </tr>
        </thead>

        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.typeID}>
              <td>{item.typeID}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vocabulary;