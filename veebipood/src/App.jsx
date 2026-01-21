// import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import LisaToode from './pages/LisaToode'
import Ostukorv from './pages/Ostukorv'
import Esindused from './pages/arrays/Esindused'
import Kinkekaardid from './pages/Kinkekaardid'
import NotFound from './pages/NotFound'
import Seaded from './pages/Seaded'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import ArraysHome from './pages/arrays/ArraysHome'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaTooted from './pages/halda/HaldaTooted'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      {/* Routes ülesse käib Menüü */}
      {/* localhost:5173/lisa-toode -> LisaToode.jsx sisu kätte */}

      <Routes>
          <Route path="/" element={ <Avaleht /> } />

          <Route path="/lisa-toode" element={<LisaToode/>} />
          <Route path="/ostukorv" element={<Ostukorv/>} />
          <Route path="/osta-kinkekaart" element={<Kinkekaardid/>} />
          <Route path="/seaded" element={<Seaded/>} />
          <Route path="/kalkulaator" element={<Kalkulaator/>} />
          
          <Route path="/arrays" element={ <ArraysHome/> } />
          <Route path="/autod" element={ <Autod/> } />
          <Route path="/esindused" element={ <Esindused/> } />
          <Route path="/hinnad" element={ <Hinnad/> } />
          <Route path="/kasutajad" element={ <Kasutajad/> } />
          <Route path="/tootajad" element={ <Tootajad/> } />
          <Route path="/tooted" element={ <Tooted/> } />

          <Route path="/halda" element={ <HaldaHome/> } />
          <Route path="/halda-autod" element={ <HaldaAutod/> } />
          <Route path="/halda-esindused" element={ <HaldaEsindused/> } />
          <Route path="/halda-hinnad" element={ <HaldaHinnad/> } />
          <Route path="/halda-kasutajad" element={ <HaldaKasutajad/> } />
          <Route path="/halda-tootajad" element={ <HaldaTootajad/> } />
          <Route path="/halda-tooted" element={ <HaldaTooted/> } />

          <Route path="/*" element={<NotFound/>} />
      </Routes>
      {/* Routes alla käib FOOTER */}
    </>
  )
}

export default App
