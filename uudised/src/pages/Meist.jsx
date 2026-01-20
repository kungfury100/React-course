import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    return ( 
        <div>
            <div>See on meist leht, nahtav localhost:3000/meist aadressil</div>
            <div>Meie töötajad:</div>
            <br />
            <div>Arvo Pärt</div>
            <div>Uudisklippide taustamuusika</div>
            <button onClick={() => n2itaKontakt('+112312312')}>Võta ühendust</button>
            <br /><br />
            < div>Kelly Sildaru</div>
            <div>Püstolreporter</div>
            <button onClick={() => n2itaKontakt('+212312312')}>Võta ühendust</button>
            <br /><br />
            <div>Edward von Löngus</div>
            <div>Uudiste kujundamine</div>
            <button onClick={() => n2itaKontakt('+312312312')}>Võta ühendust</button>
            <br /><br />
            <div>Kerli Kõiv</div>
            <div>Välisturgude spetsialist</div>
            <button onClick={() => n2itaKontakt('+412312312')}>Võta ühendust</button>
            <br /><br />
            { kontakt !== "" && <div>Tema kontakt: {kontakt}</div> }
        </div>
    );
}

export default Meist