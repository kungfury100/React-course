import React from 'react'
import { useState } from 'react';

function LisaArvuti() {
  const [message , setMessage] = useState('Lisa auto!');
  const [n2itaNuppu, uuendaN2itanuppu] =  useState(true);

  function addProduct() {
    setMessage("Arvuti lisatud!");
    uuendaN2itanuppu(false);
  }
  return (
    <div>
      <form action="">
        <div>Sõnum: {message}</div>
        <label htmlFor="">Mark</label><br />
        <input type="text" /><br /><br />
        <label htmlFor="">Mudel</label><br />
        <input type="text" /><br /><br />
        <label htmlFor="">Maksumus</label><br />
        <input type="text" /><br /><br />
        { n2itaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button> }
      </form>
    </div>
  )
}

export default LisaArvuti;