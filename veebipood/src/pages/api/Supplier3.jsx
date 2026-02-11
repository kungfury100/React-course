import React, { useEffect, useState } from 'react';

function Supplier3() {
  const [users, setUsers] = useState([]);
  const [searchedField, setSearchedField] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(Array.isArray(json) ? json : []));
  }, []);

  const search = (searched) => {
    setSearchedField(searched);
  };

  const filteredUsers = users.filter((user) => {
    if (searchedField === '') {
      return true;
    }
    const needle = searchedField.toLowerCase();
    const username = (user.username || '').toLowerCase();
    const firstName = (user.name?.firstname || '').toLowerCase();
    const lastName = (user.name?.lastname || '').toLowerCase();
    return username.includes(needle) || firstName.includes(needle) || lastName.includes(needle);
  });

  return (
    <div>
      <label>Otsi</label>
      <input defaultValue={searchedField} onChange={(e) => search(e.target.value)} type="text" /> <br />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Supplier3;