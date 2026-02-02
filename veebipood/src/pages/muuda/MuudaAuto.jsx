import React, { useState } from 'react'
import dbAutod from "../../data/autod.json"
import { useParams } from 'react-router-dom';

function MuudaAuto() {
  const { auto_id } = useParams();
  const [auto, setAuto] = useState(dbAutod.find(auto => auto.id === Number(auto_id)));

  const muudaAuto = () => {
    const index = dbAutod.findIndex(auto => auto.id === Number(auto_id));
    dbAutod[index] = auto;
  }

  const updateField = (key, value) => {
    if (key === "id" || key === "price") {
      if (/^\d+$/.test(value) === false && value !== "") {
        return;
      }
      value = Number(value);
    }
    setAuto({...auto, [key]: value})
  }

  if (auto === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      
      <div>Ajutine : {JSON.stringify(auto)}</div>

      <label htmlFor="">ID</label> <br />
      <input onChange={(e) => updateField("id", e.target.value)} value={auto.id} type="text" /> <br />
      <label htmlFor="">Name</label> <br />
      <input onChange={(e) =>updateField("name", e.target.value)} value={auto.name} type="text" /> <br />
      <label htmlFor="">Price</label> <br />
      <input onChange={(e) => updateField("price", e.target.value)} value={auto.price} type="text" /> <br />
      <label htmlFor="">Image</label> <br />
      <input onChange={(e) => updateField("image", e.target.value)} value={auto.image} type="text" /> <br />
      <label htmlFor="">Active</label> <br />
      <input onChange={(e) => updateField("active", e.target.value)} checked={auto.active} type="checkbox" /> <br />
      <button onClick={muudaAuto}>Muuda</button>
    </div>
  )
}

export default MuudaAuto