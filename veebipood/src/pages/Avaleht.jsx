// rfce
import { useState } from "react";
import laigitud from "../assets/heart.svg"
import mittelaigitud from "../assets/heart-crack.svg"

function Avaleht() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("Muuda kogust!")
  const [liked, setLiked] = useState(false);

  function zeroAmount() {
    setAmount(0);
    setMessage("Nullisid koguse!");
  }

  function decreaseAmount() {
    setAmount(amount - 1);
    setMessage("Vähendasid kogust!");
  }

  function increaseAmount() {
    setAmount(amount + 1);
    setMessage("Suurendasid kogust!");
  }


  return (
    <div>
      {liked && <img onClick={() => setLiked(false)} src={laigitud} alt="" />}
      {!liked && <img onClick={() => setLiked(true)} src={mittelaigitud} alt="" />}
        

      <div>{message}</div>
      {amount > 0 &&  <button onClick={() => zeroAmount()}>Tagasi nulli</button>}
      <br />
      <button disabled={amount === 0} onClick={() => decreaseAmount()}>-</button>
      <span className={amount > 10 ? "golden-text" : undefined}>{amount}</span>
      <button onClick={() => increaseAmount()}>+</button>
    </div>
  )
}

export default Avaleht