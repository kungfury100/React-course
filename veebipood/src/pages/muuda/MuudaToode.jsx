import { useState } from "react"
import { useParams } from "react-router-dom"
import productsFromDb from "../../data/tooted.json"

function MuudaToode() {
  const { toode_id } = useParams()
  const [product, setProduct] = useState(
    productsFromDb.find(product => String(product.id) === String(toode_id))
  )

  const muuda = () => {
    const index = productsFromDb.findIndex(product => String(product.id) === String(toode_id))
    productsFromDb[index] = product
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

  if (product === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(product)}</div>
      <label>Toote ID</label>
      <br />
      <input value={product.id} onChange={(e) => updateField("id", e.target.value)} type="text" />
      <br />
      <label>Toote nimi</label>
      <br />
      <input value={product.name} onChange={(e) => updateField("name", e.target.value)} type="text" />
      <br />
      <label>Toote hind</label>
      <br />
      <input value={product.price} onChange={(e) => updateField("price", e.target.value)} type="text" />
      <br />
      <label>Toote pilt</label>
      <br />
      <input value={product.image} onChange={(e) => updateField("image", e.target.value)} type="text" />
      <br />
      <label>Toode aktiivne</label>
      <br />
      <input checked={product.active} onChange={(e) => updateField("active", e.target.checked)} type="checkbox" />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode