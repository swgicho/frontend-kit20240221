import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TravelList from './pages/TravelList.jsx'
import TravelDetail from './pages/TravelDetail.jsx'
import {getSongList} from './api/travelApi.js'

function App() {
  const [travels, setTravels] = useState([])

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const data = await getTravelList()
        setTravels(data)
      } catch (err) {
        console.error("Failed to fetch travels:", err)
      }
    }

    fetchTravels()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<TravelList travels={travels} />} />
      <Route path="/travel/:id" element={<TravelDetail travels={travels} />} />
    </Routes>
  )
}

export default App