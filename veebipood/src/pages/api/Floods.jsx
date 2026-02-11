import React, { useEffect, useState } from 'react';

function Floods() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://environment.data.gov.uk/flood-monitoring/id/floods')
      .then((res) => res.json())
      .then((json) => setItems(Array.isArray(json.items) ? json.items : []));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>EA area name</th>
            <th>Description</th>
            <th>EA region name</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={item['@id'] || index}>
              <td>{item.eaAreaName}</td>
              <td>{item.description}</td>
              <td>{item.eaRegionName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Floods;