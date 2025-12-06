import { Link } from 'react-router-dom'
import TravelCard from '../components/TravelCard.jsx'

export default function TravelList({ travels }) {
  return (
    <div className='p-6'>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {travels.map(travel => (
          <TravelCard key={travel.id} travel={travel} />
      ))}
      </div>
    </div>
  )
}