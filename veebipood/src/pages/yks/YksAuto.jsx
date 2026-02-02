import React from 'react'
import dbAutod from "../../data/autod.json"
import { useParams } from 'react-router-dom';

function YksAuto() {
  const { auto_id } = useParams();
  const auto = dbAutod.find(auto => auto.id === Number(auto_id));

  if (auto === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <div>{auto.id}</div>
      <div>{auto.name}</div>
      <div>{auto.price}</div>
      <img style={{ width: "300px", height: auto }} src={auto.image} alt="" />
      <div>{auto.active}</div>
    </div>
  )
}

export default YksAuto