import React, { useState } from 'react'
import dbEsindused from "../../data/esindused.json"
import { useParams } from 'react-router-dom';
import { convertHtmlVariable } from '../../util/convertings';

function MuudaEsindus() {
  const { esindus_nimi } = useParams();
  const [esindus, setEsindus] = useState(
    dbEsindused.find(esindus => convertHtmlVariable(esindus.nimi) === esindus_nimi)
  );

  const muuda = () => {
    const index = dbEsindused.findIndex(esindus => convertHtmlVariable(esindus.nimi) === esindus_nimi);
    dbEsindused[index] = esindus;
  }

  if (esindus === undefined) {
    return <div>Esindust ei leitud</div>
  }
  
  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(esindus)}</div>
      <label>Esinduse nimi</label>
      <br />
      <input value={esindus.nimi} onChange={(e) => setEsindus({...esindus, nimi: e.target.value})} type="text" />
      <br />
      <label>Esinduse aadress</label>
      <br />
      <input value={esindus.aadress} onChange={(e) => setEsindus({...esindus, aadress: e.target.value})} type="text" />
      <br />
      <label>Esinduse telefon</label>
      <br />
      <input value={esindus.telefon} onChange={(e) => setEsindus({...esindus, telefon: e.target.value})} type="text" />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus