import { useState } from "react"
import usersFromDb from "../../data/kasutajad.json"
import { ToastContainer, toast } from "react-toastify"

function LisaKasutaja() {
  const [user, setUser] = useState({})

  const lisa = () => {
    if (!user.Username) {
      toast.error("Pead sisestama kasutajanime")
      return
    }

    if (!user.Email) {
      toast.error("Pead sisestama e-posti")
      return
    }

    if (!user.Password) {
      toast.error("Pead sisestama parooli")
      return
    }

    if (!user.Age) {
      toast.error("Pead sisestama vanuse")
      return
    }

    usersFromDb.push(user)
    toast.success("Kasutaja lisatud!")
  }

  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(user)}</div>
      <label>Kasutajanimi</label>
      <br />
      <input onChange={(e) => setUser({ ...user, Username: e.target.value })} type="text" />
      <br />
      <label>E-post</label>
      <br />
      <input onChange={(e) => setUser({ ...user, Email: e.target.value })} type="email" />
      <br />
      <label>Parool</label>
      <br />
      <input onChange={(e) => setUser({ ...user, Password: e.target.value })} type="text" />
      <br />
      <label>Vanus</label>
      <br />
      <input onChange={(e) => setUser({ ...user, Age: Number(e.target.value) })} type="number" />
      <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaKasutaja