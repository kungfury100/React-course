import React from 'react'
import dbEsindused from "../../data/esindused.json"
import { useParams } from 'react-router-dom';
import { convertHtmlVariable } from '../../util/convertings';

function YksEsindus() {
  const { esindus_nimi } = useParams();
  const esindus = dbEsindused.find(esindus => convertHtmlVariable(esindus.nimi) === esindus_nimi);

  if (esindus === undefined) {
    return <div>Esindust ei leitud</div>
  }
  
  return (
    <div>
      <div>{esindus.nimi}</div>
      <div>{esindus.aadress}</div>
      <div>{esindus.telefon}</div>
    </div>
  )
}

export default YksEsindus