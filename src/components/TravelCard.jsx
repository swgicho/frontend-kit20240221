import { Link } from 'react-router-dom'

export default function TravelCard({ travel }) {
  return (
    <Link to={`/travel/${travel.id}`} 
      className="cursor-pointer bg-white shadow-md rounded-2xl p-4 flex flex-col 
      items-center hover:scale-105 transition-transform">
      <img 
        src={`https://picsum.photos/100/100?random=${travel.id}`} 
        alt={`${travel.country} 앨범 이미지`}
        className="w-32 h-32 mb-2" 
      />
      <div className="text-lg font-bold">{travel.country}</div>
      <div className="text-gray-500">{travel.continent}</div>
    </Link>
  )
}