import { useRef, useState } from "react"
// {id: "", "name": "", "price": "", "image": "", "active": ""}

function LisaToode() {
  const [message, setMessage] = useState('Lisa toode')
  const nameRef = useRef();

  function addProduct() {
    if (nameRef.current.value === "") {
      setMessage("Tühja nimetuse ei saa toodet sisestada!");
    }
    else {
      setMessage("Toode sisestatud!");
    }
  }

  return (
    <div>
        <div>{message}</div>
        <label>Toote nimi</label>
        <input  ref={nameRef} type="text" /><br />
        <button onClick={() => addProduct()}>Lisa</button>
    </div>
  )
}

export default LisaToode