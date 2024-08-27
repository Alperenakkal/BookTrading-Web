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

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
       <Navbar />
       <Routes>
          <Route path='/' element={<Anasayfa />} />
          <Route path='/ekip' element={<Ekip />} />
          <Route path='/iletişim' element={<İletişim />} />
          <Route path='*' element={<SayfaBulunamadı />} />
       </Routes>
       <Footer />
       </>
       
  )
}

export default App
