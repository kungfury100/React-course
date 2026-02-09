import { useState } from "react"
import employeesFromDb from "../../data/tootajad.json"
import { ToastContainer, toast } from "react-toastify"

function LisaTootaja() {
  const [tootaja, setTootaja] = useState({})

  const lisa = () => {
    if (!tootaja.Name) {
      toast.error("Pead sisestama nime")
      return
    }

    if (!tootaja.Occupation) {
      toast.error("Pead sisestama ameti")
      return
    }

    if (!tootaja.Telephone) {
      toast.error("Pead sisestama telefoni")
      return
    }

    employeesFromDb.push(tootaja)
    toast.success("Töötaja lisatud!")
  }

  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(tootaja)}</div>
      <label>Töötaja nimi</label>
      <br />
      <input onChange={(e) => setTootaja({ ...tootaja, Name: e.target.value })} type="text" />
      <br />
      <label>Töötaja amet</label>
      <br />
      <input onChange={(e) => setTootaja({ ...tootaja, Occupation: e.target.value })} type="text" />
      <br />
      <label>Töötaja telefon</label>
      <br />
      <input onChange={(e) => setTootaja({ ...tootaja, Telephone: e.target.value })} type="text" />
      <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaTootaja