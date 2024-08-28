import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Anasayfa from './pages/Anasayfa'
import {Routes, Route} from 'react-router-dom'
import Ekip from './pages/Ekip'
import İletişim from './pages/İletişim'
import SayfaBulunamadı from './pages/SayfaBulunamadı'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Kayıtol from './pages/Kayıtol'
import Girişyap from './pages/Girişyap'
import Profil from './pages/Profil'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
       <Navbar />
       <Routes>
          <Route path='/' element={<Anasayfa />} />
          <Route path='/ekip' element={<Ekip />} />
          <Route path='/kayıtol' element={<Kayıtol />} />
          <Route path='/girişyap' element={<Girişyap />} />
          <Route path='/iletişim' element={<İletişim />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='*' element={<SayfaBulunamadı />} />
       </Routes>
       <Footer />
       </>
  )
}

export default App
