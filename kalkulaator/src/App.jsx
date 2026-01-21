import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [vastus, muudaVastus] = useState(0);
  const input1Ref = useRef();
  const input2Ref = useRef();

  function korruta() {
    muudaVastus(Number(input1Ref.current.value) * Number(input2Ref.current.value));
  }

  function lahuta() {
    muudaVastus(Number(input1Ref.current.value) - Number(input2Ref.current.value));
  }

  function jaga() {
    muudaVastus(Number(input1Ref.current.value) / Number(input2Ref.current.value));
  }

  function liida() {
    muudaVastus(Number(input1Ref.current.value) + Number(input2Ref.current.value));
  }

  return (
    <div>
      <input ref={input1Ref} type="text" />
      <input ref={input2Ref} type="text" />
      <br />
      {vastus}
      <br />
      <button style={{ backgroundColor: "black", color: "white" }} onClick={liida}>Liida</button>
      <button style={{ backgroundColor: "black", color: "white" }} onClick={lahuta}>Lahuta</button>
      <button style={{ backgroundColor: "black", color: "white" }} onClick={korruta}>Korruta</button>
      <button style={{ backgroundColor: "black", color: "white" }} onClick={jaga}>Jaga</button>
    </div>
  )
}

export default App
