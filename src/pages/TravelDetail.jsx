import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTravelDetail } from '../api/travelApi.js'

const TravelDetail = () => {
  const { id } = useParams()
  
  const { data: travel, isLoading, isError, error } = useQuery({
    queryKey: ['travel', id],
    queryFn: () => getTravelDetail(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white p-6 rounded-3xl shadow-xl max-w-2xl w-full border border-gray-100 min-h-[750px]">

        {/* 이미지 */}
        <div className="flex justify-center mb-4">
          <img
            src={`https://picsum.photos/400/300?random=${travel.id}`}
            alt={`${travel.country}`}
            className="w-64 h-48 object-cover rounded-3xl shadow-lg border-2 border-indigo-100 
                       transform hover:scale-[1.02] transition duration-300"
          />
        </div>

        {/* 국가명 & 기본 정보 */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {travel.country}
          </h1>

          <p className="text-lg text-indigo-600 font-semibold">
            🌏 {travel.continent} · 🏛 {travel.capital}
          </p>
        </div>

        {/* 국가 설명 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📘 국가 소개
          </h2>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg">
              {travel.description}
            </p>
          </div>
        </div>

        {/* 관광지 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🗺 추천 관광지
          </h2>

          <div className="flex flex-wrap gap-3">
            {travel.tourist_attraction.split(", ").map((spot, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 font-medium 
                           rounded-full shadow-sm hover:bg-indigo-200 transition"
              >
                {spot}
              </span>
            ))}
          </div>
        </div>

        {/* 돌아가기 버튼 */}
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="px-8 py-3 text-lg font-semibold rounded-full shadow-md 
                       text-white bg-indigo-600 hover:bg-indigo-700 
                       transition focus:outline-none focus:ring-2 
                       focus:ring-indigo-400 focus:ring-offset-2"
          >
            ← 여행 목록으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TravelDetail
