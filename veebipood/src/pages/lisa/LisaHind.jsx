import React, { useRef } from 'react'
import hinnadFromDb from "../../data/hinnad.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaHind() {

  const arvRef = useRef();
  const sonaRef = useRef();

  const lisa = () => {
    if (arvRef.current.value === "") {
      toast.error("Pead sisestama arvu");
      return;
    }

    if (sonaRef.current.value.length < 3) {
      toast.error("Pead sisestama sõna")
      return;
    }

    hinnadFromDb.push({
      arv: arvRef.current.value, 
      sonana: sonaRef.current.value
    });
    toast.success("Hind lisatud!");
  }

  return (
    <div>
      <label>Hind</label>
      <input ref={arvRef} type="text" />
      <label>Hind sõnana</label>
      <input ref={sonaRef} type="text" />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaHind