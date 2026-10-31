import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="icon"></div>
        <div className="menu"></div>
      </header>
      <main>
        <div className="hero">
          <div className="hero-text">
            <h1>Belladonna</h1>
            <p>Branding and Design Studio</p>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
