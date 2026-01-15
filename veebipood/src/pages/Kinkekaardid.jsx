import { useRef, useState } from "react";

function Kinkekaardid() {
  const [summa, setSumma] = useState(20);
  const [amount, setAmount] = useState(1);
  const emailRef = useRef();

  function insertEmail() {
    if (emailRef.current.value === "") {
      alert("Ei saa sisestada tühja emaili");
      return;
    }
    if (emailRef.current.value.includes("@") === false) {
      alert("Ei saa sisestada ilma @ märgita");
      return;
    } 
    if (emailRef.current.value.lenght < 6) {
      alert("Email liiga lühikene");
      return;
    }

    alert("Email sisestatud");
  }
  
  return (
    <div>
      <button className={summa === 20 ? "sum-active" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "sum-active" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "sum-active" : undefined} onClick={() => setSumma(100)}>100€</button>

      <div>Kinkekaart: {summa} €</div>  

      <br /><br />

      <button disabled={amount === 1} onClick={() => setAmount(amount - 1)}>-</button>
      <span>{amount}</span>
      <button onClick={() => setAmount(amount + 1)}>+</button>
      <br /><br />

      <div>Kokku: {summa * amount}€</div>

      <br /><br />

      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={() => insertEmail()}>Sisesta email</button> <br />
    </div>
  )
}

export default Kinkekaardid