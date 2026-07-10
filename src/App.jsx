import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddMission from './components/AddMission'
import SearchMission from './components/SearchMission'
import DeleteMission from './components/DeleteMission'
import ViewAllMission from './components/ViewAllMission'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddMission />} />
          <Route path='/search' element={<SearchMission />} />
          <Route path='/delete' element={<DeleteMission />} />
          <Route path='/view' element={<ViewAllMission />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
