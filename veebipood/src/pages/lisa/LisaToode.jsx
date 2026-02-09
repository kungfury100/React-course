import { useState } from "react"
import productsFromDb from "../../data/tooted.json"
import { ToastContainer, toast } from "react-toastify"

function LisaToode() {
  const [product, setProduct] = useState(() => ({
    id: Math.ceil(Math.random() * 9999),
    active: false
  }))

  const lisa = () => {
    if (!product.name) {
      toast.error("Pead sisestama nime")
      return
    }

    if (!product.price) {
      toast.error("Pead sisestama hinna")
      return
    }

    if (!product.image) {
      toast.error("Pead sisestama pildi")
      return
    }

    productsFromDb.push(product)
    toast.success("Toode lisatud!")
  }

  const updateField = (key, value) => {
    if (key === "id" || key === "price") {
      if (/^\d+$/.test(value) === false && value !== "") {
        return
      }
      value = Number(value)
    }
    setProduct({ ...product, [key]: value })
  }

  return (
    <div>
      <br />
      <div>Ajutine väljakuvamine: {JSON.stringify(product)}</div>
      <label>Toote ID</label>
      <br />
      <input onChange={(e) => updateField("id", e.target.value)} type="text" />
      <br />
      <label>Toote nimi</label>
      <br />
      <input onChange={(e) => updateField("name", e.target.value)} type="text" />
      <br />
      <label>Toote hind</label>
      <br />
      <input onChange={(e) => updateField("price", e.target.value)} type="text" />
      <br />
      <label>Toote pilt</label>
      <br />
      <input onChange={(e) => updateField("image", e.target.value)} type="text" />
      <br />
      <label>Toode aktiivne</label>
      <br />
      <input onChange={(e) => updateField("active", e.target.checked)} type="checkbox" />
      <br />
      <button onClick={lisa}>Lisa</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
      />
    </div>
  )
}

export default LisaToode