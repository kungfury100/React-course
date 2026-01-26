import React, { useState } from 'react'
import esindusedFromDb from "../../data/esindused.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaEsindus() {

  const [esindus, setEsindus] = useState({});

  const lisa = () => {
    if (!esindus.nimi) {
      toast.error("Pead sisestama nime");
      return;
    }

    if (!esindus.aadress || esindus.aadress.length < 3) {
      toast.error("Pead sisestama aadressi")
      return;
    }

    if (!esindus.telefon) {
      toast.error("Pead sisestama telefoni")
      return;
    }

    esindusedFromDb.push(esindus);
    toast.success("Esindus lisatud!");
  }

  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(esindus)}</div>
      <label>Esinduse nimi</label>
      <br />
      <input onChange={(e) => setEsindus({...esindus, nimi: e.target.value})} type="text" />
      <br />
      <label>Esinduse aadress</label>
      <br />
      <input onChange={(e) => setEsindus({...esindus, aadress: e.target.value})} type="text" />
      <br />
      <label>Esinduse telefon</label>
      <br />
      <input onChange={(e) => setEsindus({...esindus, telefon: e.target.value})} type="text" />
      <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaEsindus