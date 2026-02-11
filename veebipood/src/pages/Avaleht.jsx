// rfce
import { useState } from "react";
import { Link } from "react-router-dom";
import laigitud from "../assets/heart.svg"
import mittelaigitud from "../assets/heart-crack.svg"
import joogidFromDb from "../data/joogid.json"
import CarouselGallery from "../components/CarouselGallery";
import { Button as BtButton } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from "@mui/material";


function Avaleht() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("Muuda kogust!")
  const [liked, setLiked] = useState(false);
  const [products, setProducts] = useState(["Coca-cola", "Fanta", "Sprite"]);

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
      <MuiButton variant="contained">Contained</MuiButton>

      <BtButton>Button</BtButton>

      <CarouselGallery />

      {liked && <img onClick={() => setLiked(false)} src={laigitud} alt="" />}
      {!liked && <img onClick={() => setLiked(true)} src={mittelaigitud} alt="" />}
        

      <div>{message}</div>
      {amount > 0 &&  <button onClick={() => zeroAmount()}>Tagasi nulli</button>}
      <br />
      <button disabled={amount === 0} onClick={() => decreaseAmount()}>-</button>
      <span className={amount > 10 ? "golden-text" : undefined}>{amount}</span>
      <button onClick={() => increaseAmount()}>+</button>

      <br /><br />

      <div>
        {products.map(product => <div key={product}>{product}</div>)}
      </div>
      <button onClick={() => setProducts(["Coca-cola", "Fanta", "Sprite", "Red Bull"])}>Lisa Red Bull</button>
      <br /><br /><br />

      <h3>Joogid:</h3>
        {joogidFromDb.map((jook, index) => 
          <div key={index}>
            <Link to={`/jook/${index}`}>
              {jook.name}
            </Link>
          </div>
        )}
    </div>
  )
}

export default Avaleht