import { Link } from 'react-router-dom'

export default function TravelCard({ travel }) {
  return (
    <Link to={`/travel/${travel.id}`} >
      <img 
        src={`https://picsum.photos/100/100?random=${travel.id}`} 
        alt={`${travel.country} 앨범 이미지`}
      />
      <div>{travel.country}</div>
    </Link>
  )
}