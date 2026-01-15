// import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import LisaToode from './pages/LisaToode'
import Ostukorv from './pages/Ostukorv'
import Esindused from './pages/Esindused'
import Kinkekaardid from './pages/Kinkekaardid'
import NotFound from './pages/NotFound'
import Seaded from './pages/Seaded'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'

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
          <Route path="/esindused" element={ <Esindused/> } />
          <Route path="/osta-kinkekaart" element={<Kinkekaardid/>} />
          <Route path="/seaded" element={<Seaded/>} />
          <Route path="/kalkulaator" element={<Kalkulaator/>} />
          <Route path="/*" element={<NotFound/>} />
      </Routes>
      {/* Routes alla käib FOOTER */}
    </>
  )
}

export default App
