import React, { useState } from 'react'
import autodFromDb from "../../data/autod.json"
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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

  const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };


  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(auto)}</div>
      {/* <br />
      <label>Auto nimi</label> */}
      <br />
      <TextField label="Auto nimi" variant="outlined" onChange={(e) => setAuto({...auto, name: e.target.value})}/>
      {/* <input onChange={(e) => setAuto({...auto, name: e.target.value})} type="text" /> */}
      <br />
      {/* <label>Auto hind</label> */}
      <br />
      <TextField label="Auto hind" variant="outlined" onChange={(e) => setAuto({ ...auto, price: Number(e.target.value) })}/>
      {/* <input onChange={(e) => setAuto({...auto, price: e.target.value})} type="text" /> */}
      <br />
      {/* <label>Auto pilt</label> */}
      <br />
      <TextField label="Auto pilt" variant="outlined" onChange={(e) => setAuto({...auto, image: e.target.value})}/>
      {/* <input onChange={(e) => setAuto({...auto, image: e.target.value})} type="text" /> */}
      <br />
      <label>Auto aktiivne</label>
      <br />
      <Checkbox onChange={(e) => setAuto({...auto, active: e.target.checked})} {...label} defaultChecked />
      {/* <input onChange={(e) => setAuto({...auto, active: e.target.checked})} type="checkbox" /> */}
      <br />
      <Button onClick={lisa} variant="contained">Lisa</Button>
      {/* <button onClick={lisa}>Lisa</button> */}
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaAuto