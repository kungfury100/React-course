import { useParams } from "react-router-dom"
import productsFromDb from "../../data/tooted.json"

function YksToode() {
  const { toode_id } = useParams()
  const product = productsFromDb.find(product => String(product.id) === String(toode_id))

  if (product === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <div>ID: {product.id}</div>
      <div>Nimi: {product.name}</div>
      <div>Hind: {product.price}</div>
      <div>Aktiivne: {product.active + 0}</div>
      <div>
        <img src={product.image} alt={product.name} width="200" />
      </div>
    </div>
  )
}

export default YksToode