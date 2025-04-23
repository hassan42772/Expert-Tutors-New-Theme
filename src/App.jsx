
import '@fortawesome/fontawesome-free/css/all.css';
import {Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import  Footer  from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
