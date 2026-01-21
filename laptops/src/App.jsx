import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Avaleht from './pages/Avaleht.jsx'
import VaataArvuteid from './pages/VaataArvuteid.jsx'
import LisaArvuti from './pages/LisaArvuti.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Sülearvutid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Routes>
        <Route path="" exact element={ <Avaleht /> } />
        <Route path="all" exact element={ <VaataArvuteid /> } />
        <Route path="add" exact element={<LisaArvuti /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
