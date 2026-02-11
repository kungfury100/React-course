import React, { useEffect, useState } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchedField, setSearchedField] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then((res) => res.json())
      .then((json) => setCountries(Array.isArray(json) ? json : []));
  }, []);

  const search = (searched) => {
    setSearchedField(searched);
  };

  const filteredCountries = countries.filter((country) => {
    if (searchedField === '') {
      return true;
    }
    const needle = searchedField.toLowerCase();
    const name = (country.name?.common || '').toLowerCase();
    return name.includes(needle);
  });

  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={searchedField} onChange={(e) => search(e.target.value)} type="text" /> <br />
      <table>
        <thead>
          <tr>
            <th>Common</th>
            <th>Official</th>
          </tr>
        </thead>

        <tbody>
          {filteredCountries.map((country, index) => (
            <tr key={country.name.common || index}>
              <td>{country.name.common}</td>
              <td>{country.name.official}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Countries;