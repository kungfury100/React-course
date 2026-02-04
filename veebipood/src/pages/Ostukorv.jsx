import { useState } from "react"

function Ostukorv() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const deleteProduct = (index) => {
    cart.splice(index,1); // mitmendat kustutan; mitu tk kustutan
    setCart(cart.slice()); // tee koopia, lõika mälukoht
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const arvutaKokku = () => {
    let summa = 0
    cart.forEach(product => summa = summa + product.price)
    return summa;
  }

  return (
    <div>
      <br /><br /><br /><br />
      {cart.length === 0 && <div>Ostukorv on tühi</div>}
      {cart.length > 0 &&
      <div>
        {cart.map((product, index) => 
          <div key={index}>
            {index + 1}. {product.name} {product.price}€
            <button onClick={() => deleteProduct(index)}>x</button>
          </div>
        )}
        <br />
        <div>Kokku: {cart.length} tk</div>
        {cart.length > 0 && <div>Kogusumma: {arvutaKokku()}€</div>}
        <br />
        <button onClick={emptyCart}>Tühjenda</button>
      </div>
      }
    </div>
  )
}

export default Ostukorv