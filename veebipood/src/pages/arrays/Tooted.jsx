import { useState } from "react"
import { Link } from "react-router-dom"
import productsFromDb from "../../data/tooted.json"

function Tooted() {
  const [products, setProducts] = useState(productsFromDb.slice())

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a));
    setProducts(products.slice());
  }

  const sortLettersAsc = () => {
    products.sort((a, b) => a.name.length - b.name.length);
    setProducts(products.slice());
  }

  const sortLettersDesc = () => {
    products.sort((a, b) => b.name.length - a.name.length);
    setProducts(products.slice());
  }

  const sortSecondLetterAZ = () => {
    products.sort((a, b) => a.name[1].localeCompare(b.name[1], 'et'));
    setProducts(products.slice());
  }

  const filterUpTo6Characters = () => {
    const result = products.filter(product => product.name.length <= 6);
    setProducts(result);
  }

  const filterExactly6Characters = () => {
    const result = products.filter(product => product.name.length === 6);
    setProducts(result);
  }

  const filterEndsWithA = () => {
    const result = products.filter(product => product.name[product.name.length - 1] === "a");
    setProducts(result);
  }

  const filterEndsWithY = () => {
    const result = products.filter(product => product.name[product.name.length - 1] === "y");
    setProducts(result);
  }

  const filterEvenCharacters = () => {
    const result = products.filter(product => product.name.length % 2 === 0);
    setProducts(result);
  }

  const reset = () => {
    setProducts(productsFromDb.slice());
  }

  return (
    <div>
      <br />
      <div>
        <Link to="/autod">
          <button>Autod</button>
        </Link>
        <Link to="/esindused">
          <button>Esindused</button>
        </Link>
        <Link to="/hinnad">
          <button>Hinnad</button>
        </Link>
        <Link to="/kasutajad">
          <button>Kasutajad</button>
        </Link>
        <Link to="/tootajad">
          <button>Töötajad</button>
        </Link>
        <Link to="/tooted">
          <button>Tooted</button>
        </Link>
      </div><br /><br /><br />
      <p className="title">Sorteeri</p>
      <button onClick={sortAZ}>A-Z</button>
      <button onClick={sortZA}>Z-A</button>
      <button onClick={sortLettersAsc}>Tähed kasvavalt</button>
      <button onClick={sortLettersDesc}>Tähed kahanevalt</button>
      <button onClick={sortSecondLetterAZ}>Teine täht A-Z</button>
      <br /><br />
      <p className="title">Filtreeri</p>
      <button onClick={filterUpTo6Characters}>Kuni 6 tähte</button>
      <button onClick={filterExactly6Characters}>Täpselt 6 tähte</button>
      <button onClick={filterEndsWithA}>Lõppeb "a" tähega</button>
      <button onClick={filterEndsWithY}>Lõppeb "y" tähega</button>
      <button onClick={filterEvenCharacters}>Paarisarv tähti</button>
      <br /><br />
      {products.map(product =>
        <div key={product.id}>
          {product.name}
          <br />
          Hind: {product.price}
          <br />
          Aktiivne: {product.active + 0}
          <br />
          <img src={product.image} alt={product.name} width="150" />
          <br />
          <Link to={"/toode/" + product.id}>
            <button>Vt lähemalt</button>
          </Link>
        </div>
      )}
      <br />
      {products.length} tk
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Tooted