import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Anasayfa from './components/Anasayfa'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
       <Navbar />
       <Anasayfa />
       </>
  )
}

export default App
