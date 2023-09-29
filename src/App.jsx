import { useEffect, useState } from 'react'

import { navigate, NAVIGATION_EVENT } from '../utils/navigate'

import AboutPage from './AboutPage'
import ProductionsPage from './ProductionsPage'

// eslint-disable-next-line no-unused-vars
import NavBar from '../components/NavBar'
import Video from '../components/Video'
import News from '../components/News'
import AboutUs from '../components/AboutUs'
import Productions from '../components/Producctions'
import SupportUs from '../components/SupportUs'
import './App.css'

function HomePage() {
  return (
    <>
      {/* <header className="App-header">
        <NavBar />
      </header> */}
      <Video />
      <News />
      <AboutUs />
      <Productions />
      <Button to='/about' text='About' />
      <Button to='/productions' text='Productions' />
    </>
  )
}

export function Button({ to, text }) {
  return <button onClick={() => navigate(to)}>{text}</button>
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
      {currentPath === '/productions' && <ProductionsPage />}
      <SupportUs />
    </>
  )
}
