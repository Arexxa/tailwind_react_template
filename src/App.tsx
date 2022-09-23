import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import MainPage from './Pages/Main'
import { Routes, Route } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
