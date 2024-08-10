import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLink from './components/SocialLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home/>

    </>
  )
}

export default App
