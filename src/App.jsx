import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
function App() {
 

  return (
    <>
    <Header/>

    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/his" element={<History />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
