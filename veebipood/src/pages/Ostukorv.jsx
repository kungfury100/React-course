import { useState } from "react"

function Ostukorv() {
  const [cart, setCart] = useState(["Coca-cola", "Fanta", "Sprite"])
  const deleteProduct = (index) => {
    cart.splice(index,1); // mitmendat kustutan; mitu tk kustutan
    setCart(cart.slice()); // tee koopia, lõika mälukoht
  }
  return (
    <div>
      <br /><br /><br /><br />
      {cart.length === 0 && <div>Ostukorv on tühi</div>}
      {cart.length > 0 &&
      <div>
        <div>Kokku: {cart.length} tk</div>
        <button onClick={() => setCart([])}>Tühjenda</button>
      </div>
      }
      <div>
        {cart.map((product, index) => 
          <div key={product}>
            {index + 1}. {product}
            <button onClick={() => deleteProduct(index)}>x</button>
          </div>
        )}
      </div>
      {cart.length > 0 && <div>Kogusumma: xx</div>}
    </div>
  )
}

export default Ostukorv