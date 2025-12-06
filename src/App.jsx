import { Routes, Route } from 'react-router-dom'
//import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import TravelList from './pages/TravelList.jsx'
import TravelDetail from './pages/TravelDetail.jsx'
import {getTravelList} from './api/travelApi.js'

function App() {
  // const [travels, setTravels] = useState([])

  // useEffect(() => {
  //   const fetchTravels = async () => {
  //     try {
  //       const data = await getTravelList()
  //       setTravels(data)
  //     } catch (err) {
  //       console.error("Failed to fetch travels:", err)
  //     }
  //   }

  //   fetchTravels()
  // }, [])

  const { data: travels, isLoading, isError, error } = useQuery({
    queryKey: ['travels'],
    queryFn: getTravelList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<TravelList travels={travels} />} />
      <Route path="/travel/:id" element={<TravelDetail travels={travels} />} />
    </Routes>
  )
}

export default App