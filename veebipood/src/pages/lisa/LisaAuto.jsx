import React, { useState } from 'react'
import autodFromDb from "../../data/autod.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaAuto() {

  const [auto, setAuto] = useState(() => ({id: Math.ceil(Math.random() * 9999), active: false}));

  const lisa = () => {
    if (!auto.name) {
      toast.error("Pead sisestama nime");
      return;
    }

    if (!auto.price) {
      toast.error("Pead sisestama hinna")
      return;
    }

    if (!auto.image) {
      toast.error("Pead sisestama pildi")
      return;
    }

    autodFromDb.push(auto);
    toast.success("Auto lisatud!");
  }

  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(auto)}</div>
      <br />
      <label>Auto nimi</label>
      <br />
      <input onChange={(e) => setAuto({...auto, name: e.target.value})} type="text" />
      <br />
      <label>Auto hind</label>
      <br />
      <input onChange={(e) => setAuto({...auto, price: e.target.value})} type="text" />
      <br />
      <label>Auto pilt</label>
      <br />
      <input onChange={(e) => setAuto({...auto, image: e.target.value})} type="text" />
      <br />
      <label>Auto aktiivne</label>
      <br />
      <input onChange={(e) => setAuto({...auto, active: e.target.checked})} type="checkbox" />
      <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaAuto