import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Course from './component/Course/Course'
import Home from './component/Home/Home'

function App() {
  const [data, setData] = useState(0)
  

  return (
    <>
      <Header></Header>
      <Course></Course>
      <Home></Home>
    </>
  )
}

export default App
