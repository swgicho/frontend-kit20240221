import { Routes, Route } from 'react-router-dom'
import TravelList from './pages/TravelList.jsx'
import TravelDetail from './pages/TravelDetail.jsx'

const travels = [
  {
    "id": "69338b67cd7dc3c5c564d609",
    "country": "대한민국",
    "continent": "아시아",
    "capital": "서울",
    "description": "첨단 기술과 전통 문화가 공존하는 활기찬 국가이다.",
    "tourist_attraction": "서울, 부산, 제주도"
  },
  {
    "id": "69338b67cd7dc3c5c564d60a",
    "country": "일본",
    "continent": "아시아",
    "capital": "도쿄",
    "description": "전통과 현대가 조화를 이루며 사계절의 아름다움이 돋보이는 나라이다.",
    "tourist_attraction": "후지산, 도쿄, 교토"
  },
  {
    "id": "69338b67cd7dc3c5c564d60b",
    "country": "중국",
    "continent": "아시아",
    "capital": "베이징",
    "description": "오랜 역사와 다양한 자연 경관을 가진 세계에서 가장 큰 국가 중 하나이다.",
    "tourist_attraction": "만리장성, 상하이, 자금성"
  },
  {
    "id": "69338b67cd7dc3c5c564d60c",
    "country": "태국",
    "continent": "아시아",
    "capital": "방콕",
    "description": "따뜻한 날씨와 아름다운 해변, 풍부한 길거리 음식으로 유명하다.",
    "tourist_attraction": "푸켓, 방콕, 치앙마이"
  },
  {
    "id": "69338b67cd7dc3c5c564d60d",
    "country": "베트남",
    "continent": "아시아",
    "capital": "하노이",
    "description": "맛있는 음식과 풍부한 자연 경관으로 사랑받는 여행지이다.",
    "tourist_attraction": "하롱베이, 호찌민, 다낭"
  },
  {
    "id": "69338b67cd7dc3c5c564d60e",
    "country": "말레이시아",
    "continent": "아시아",
    "capital": "쿠알라룸푸르",
    "description": "다양한 민족과 문화가 공존하는 열대 국가이다.",
    "tourist_attraction": "페트로나스 타워, 페낭, 랑카위"
  },
  {
    "id": "69338b67cd7dc3c5c564d60f",
    "country": "싱가포르",
    "continent": "아시아",
    "capital": "싱가포르",
    "description": "현대적인 도시 환경과 청결한 거리로 유명한 도시국가이다.",
    "tourist_attraction": "마리나 베이 샌즈, 센토사, 가든스 바이 더 베이"
  },
  {
    "id": "69338b67cd7dc3c5c564d610",
    "country": "인도네시아",
    "continent": "아시아",
    "capital": "자카르타",
    "description": "수많은 섬으로 이루어진 자연과 문화가 풍부한 나라이다.",
    "tourist_attraction": "발리, 자카르타, 보로부두르"
  },
  {
    "id": "69338b67cd7dc3c5c564d611",
    "country": "필리핀",
    "continent": "아시아",
    "capital": "마닐라",
    "description": "아름다운 해변과 친절한 사람들로 유명한 휴양지 국가이다.",
    "tourist_attraction": "보라카이, 세부, 마닐라"
  },
  {
    "id": "69338b67cd7dc3c5c564d612",
    "country": "인도",
    "continent": "아시아",
    "capital": "뉴델리",
    "description": "다양한 문화와 오랜 역사를 가진 광대한 나라이다.",
    "tourist_attraction": "타지마할, 자이푸르, 뭄바이"
  },
  {
    "id": "69338b67cd7dc3c5c564d613",
    "country": "프랑스",
    "continent": "유럽",
    "capital": "파리",
    "description": "예술, 패션, 음식으로 세계적인 명성을 가진 나라이다.",
    "tourist_attraction": "에펠탑, 루브르 박물관, 니스"
  },
  {
    "id": "69338b67cd7dc3c5c564d614",
    "country": "영국",
    "continent": "유럽",
    "capital": "런던",
    "description": "전통과 현대 문화가 조화를 이루는 국가이다.",
    "tourist_attraction": "버킹엄 궁전, 타워 브리지, 에든버러"
  },
  {
    "id": "69338b67cd7dc3c5c564d615",
    "country": "이탈리아",
    "continent": "유럽",
    "capital": "로마",
    "description": "예술과 역사, 맛있는 음식으로 유명한 여행지이다.",
    "tourist_attraction": "로마, 베네치아, 피렌체"
  },
  {
    "id": "69338b67cd7dc3c5c564d616",
    "country": "스페인",
    "continent": "유럽",
    "capital": "마드리드",
    "description": "따뜻한 기후와 활기찬 축제로 유명한 나라이다.",
    "tourist_attraction": "바르셀로나, 마드리드, 세비야"
  },
  {
    "id": "69338b67cd7dc3c5c564d617",
    "country": "독일",
    "continent": "유럽",
    "capital": "베를린",
    "description": "풍부한 역사와 현대적인 도시가 공존하는 국가이다.",
    "tourist_attraction": "베를린 장벽, 뮌헨, 노이슈반슈타인 성"
  },
  {
    "id": "69338b67cd7dc3c5c564d618",
    "country": "스위스",
    "continent": "유럽",
    "capital": "베른",
    "description": "알프스 산맥과 맑은 호수로 유명한 자연 관광국이다.",
    "tourist_attraction": "융프라우, 취리히, 루체른"
  },
  {
    "id": "69338b67cd7dc3c5c564d619",
    "country": "아이슬란드",
    "continent": "유럽",
    "capital": "레이캬비크",
    "description": "얼음과 불의 땅이라 불리며 신비로운 자연 풍경이 가득한 나라이다.",
    "tourist_attraction": "블루라군, 골든서클, 요쿨살론"
  },
  {
    "id": "69338b67cd7dc3c5c564d61a",
    "country": "오스트리아",
    "continent": "유럽",
    "capital": "비엔나",
    "description": "음악과 예술이 살아 숨 쉬는 고풍스러운 유럽의 중심지이다.",
    "tourist_attraction": "비엔나, 잘츠부르크, 인스브루크"
  },
  {
    "id": "69338b67cd7dc3c5c564d61b",
    "country": "체코",
    "continent": "유럽",
    "capital": "프라하",
    "description": "중세 도시의 분위기가 그대로 남아 있는 동유럽의 보석 같은 나라이다.",
    "tourist_attraction": "프라하성, 구시가지 광장, 카를교"
  },
  {
    "id": "69338b67cd7dc3c5c564d61c",
    "country": "스웨덴",
    "continent": "유럽",
    "capital": "스톡홀름",
    "description": "자연과 도시가 조화를 이루며 여유로운 북유럽의 감성을 느낄 수 있다.",
    "tourist_attraction": "스톡홀름, 아비스코, 고텐버그"
  },
  {
    "id": "69338b67cd7dc3c5c564d61d",
    "country": "그리스",
    "continent": "유럽",
    "capital": "아테네",
    "description": "고대 문명의 흔적과 아름다운 섬들로 유명하다.",
    "tourist_attraction": "산토리니, 아크로폴리스, 미코노스"
  },
  {
    "id": "69338b67cd7dc3c5c564d61e",
    "country": "네덜란드",
    "continent": "유럽",
    "capital": "암스테르담",
    "description": "운하와 튤립, 풍차가 유명한 아름다운 나라이다.",
    "tourist_attraction": "암스테르담, 로테르담, 잔세스칸스"
  },
  {
    "id": "69338b67cd7dc3c5c564d61f",
    "country": "포르투갈",
    "continent": "유럽",
    "capital": "리스본",
    "description": "해양 문화가 발달한 따뜻한 기후의 나라이다.",
    "tourist_attraction": "리스본, 포르투, 신트라"
  },
  {
    "id": "69338b67cd7dc3c5c564d620",
    "country": "노르웨이",
    "continent": "유럽",
    "capital": "오슬로",
    "description": "웅장한 자연 경관과 피오르드로 유명한 나라이다.",
    "tourist_attraction": "피오르드, 베르겐, 오슬로"
  },
  {
    "id": "69338b67cd7dc3c5c564d621",
    "country": "미국",
    "continent": "북아메리카",
    "capital": "워싱턴 D.C.",
    "description": "다양한 문화와 자연 지형을 가진 광대한 국가이다.",
    "tourist_attraction": "뉴욕, 그랜드 캐니언, 로스앤젤레스"
  },
  {
    "id": "69338b67cd7dc3c5c564d622",
    "country": "캐나다",
    "continent": "북아메리카",
    "capital": "오타와",
    "description": "광활한 자연과 청정한 환경으로 유명한 나라이다.",
    "tourist_attraction": "밴프, 토론토, 퀘벡"
  },
  {
    "id": "69338b67cd7dc3c5c564d623",
    "country": "멕시코",
    "continent": "북아메리카",
    "capital": "멕시코시티",
    "description": "색채가 풍부한 전통 문화와 해변이 매력적인 국가이다.",
    "tourist_attraction": "칸쿤, 멕시코시티, 치첸이트사"
  },
  {
    "id": "69338b67cd7dc3c5c564d624",
    "country": "브라질",
    "continent": "남아메리카",
    "capital": "브라질리아",
    "description": "삼바와 축제로 유명하며 자연이 풍부한 나라이다.",
    "tourist_attraction": "리우데자네이루, 상파울루, 아마존"
  },
  {
    "id": "69338b67cd7dc3c5c564d625",
    "country": "아르헨티나",
    "continent": "남아메리카",
    "capital": "부에노스아이레스",
    "description": "열정적인 문화와 광활한 자연이 인상적인 국가이다.",
    "tourist_attraction": "이과수 폭포, 파타고니아, 부에노스아이레스"
  },
  {
    "id": "69338b67cd7dc3c5c564d626",
    "country": "이집트",
    "continent": "아프리카",
    "capital": "카이로",
    "description": "피라미드와 고대 유적이 남아 있는 신비로운 나라이다.",
    "tourist_attraction": "피라미드, 룩소르, 카이로"
  },
  {
    "id": "69338b67cd7dc3c5c564d627",
    "country": "남아프리카공화국",
    "continent": "아프리카",
    "capital": "프리토리아",
    "description": "야생동물과 자연 경관이 아름다운 나라이다.",
    "tourist_attraction": "사파리, 케이프타운, 요하네스버그"
  },
  {
    "id": "69338b67cd7dc3c5c564d628",
    "country": "모로코",
    "continent": "아프리카",
    "capital": "라바트",
    "description": "이국적인 시장과 전통 건축물이 매력적인 나라이다.",
    "tourist_attraction": "마라케시, 페스, 카사블랑카"
  },
  {
    "id": "69338b67cd7dc3c5c564d629",
    "country": "호주",
    "continent": "오세아니아",
    "capital": "캔버라",
    "description": "다양한 자연과 여유로운 분위기가 특징인 대륙 국가이다.",
    "tourist_attraction": "시드니, 멜버른, 그레이트 배리어 리프"
  },
  {
    "id": "69338b67cd7dc3c5c564d62a",
    "country": "뉴질랜드",
    "continent": "오세아니아",
    "capital": "웰링턴",
    "description": "아름다운 자연과 모험 관광으로 유명한 나라이다.",
    "tourist_attraction": "퀸스타운, 밀포드 사운드, 오클랜드"
  }
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelList travels={travels} />} />
      <Route path="/travel/:id" element={<TravelDetail travels={travels} />} />
    </Routes>
  )
}

export default App