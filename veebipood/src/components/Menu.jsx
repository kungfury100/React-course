import {Link} from "react-router-dom";

function Menu() {
  return (
    <div>
        <Link to="/">
            <img className="pilt" src="https://www.green.earth/hs-fs/hubfs/Nature-based%20markets%20valued%20at%20$7%20trillion.jpg?width=683&height=420&name=Nature-based%20markets%20valued%20at%20$7%20trillion.jpg" alt="" />
        </Link>

        <Link to="/esindused">
            <button>Esindused</button>
        </Link>
        <Link to="/osta-kinkekaart">
            <button>Kinkekaardid</button>
        </Link>
        <Link to="/lisa-toode">
            <button>Lisa toode</button>
        </Link>
        <Link to="/ostukorv">
            <button>Ostukorv</button>
        </Link>
        <Link to="/seaded">
            <button>Seaded</button>
        </Link>
        <Link to="/kalkulaator">
            <button>Kalkulaator</button>
        </Link>
    </div>
  )
}

export default Menu