import { useEffect, useState } from "react"

function Ostukorv() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [selectedPM, setSelectedPM] = useState("");
  const [country, setCountry] = useState("EE");

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  const maksa = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "account_name": "EUR3D1",
      // eslint-disable-next-line react-hooks/purity
      "nonce": "fasead" + new Date() + Math.random(),
      "timestamp": new Date(),
      "amount": arvutaKokku(),
      // eslint-disable-next-line react-hooks/purity
      "order_reference": "asfd" + Math.random(),
      "customer_url": "https://react-course-ec6b4.web.app",
      "api_username": "e36eb40f5ec87fa2"
    };
    const paymentHeaders = {
      "Content-Type": "application/json",
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
    };
    
    fetch(paymentUrl, {
      method: "POST",
      body: JSON.stringify(paymentBody),
      headers: paymentHeaders
    })
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link)
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
       
        {cart.length > 0 &&
        <>
          <button onClick={() => setCountry("EE")}>Eesti</button>
          <button onClick={() => setCountry("LV")}>Läti</button>
          <button onClick={() => setCountry("LT")}>Leedu</button>
          <div>Valitud pakiautomaat: {selectedPM}</div>
          <select onChange={(e) => setSelectedPM(e.target.value)} defaultValue="">
            <option disabled value="">Vali pakiautomaat</option>
            {parcelMachines
              .filter(pm => pm.A0_NAME === country )
              .map(pm => 
                <option key={pm.NAME}>
                  {pm.NAME}
                </option>
            )}
          </select>
          <div>Kogusumma: {arvutaKokku()}€</div>
          <button onClick={maksa}>Maksa</button>
        </>
        }
      </div>
      }
    </div>
  )
}

export default Ostukorv