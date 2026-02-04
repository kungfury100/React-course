import React, { useState } from 'react'
import employeesFromDb from "../data/tootajad.json";

function Meist() {
  const [employees] = useState(employeesFromDb.slice());
  const [shownPhones, setShownPhones] = useState({});
  const [valitud, setValitud] = useState("");

  const togglePhone = (index) => {
    setShownPhones(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      {employees.map((employee, index) => (
        <div 
          key={index} 
          className={valitud === employee.Name ? "valitud" : undefined}
          onClick={() => setValitud(employee.Name)}
        >
          <br /><br />
          <div>Nimi: {employee.Name}</div>
          <div>Ala: {employee.Occupation}</div>
          <button onClick={() => togglePhone(index)}>Näita telefon</button>
          {shownPhones[index] && <div>Telefon: {employee.Telephone}</div>}
          <br /><br /><br />
        </div>
      ))}
    </div>
  )
}

export default Meist