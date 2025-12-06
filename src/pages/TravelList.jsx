import { Link } from 'react-router-dom'
import TravelCard from '../components/TravelCard.jsx'

export default function TravelList({ travels }) {
  return (
    <>
      {travels.map(travel => (
        <TravelCard key={travel.id} travel={travel} />
      ))}
    </>
  )
}