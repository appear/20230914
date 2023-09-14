import { useState } from 'react'

import { stocks } from './data'
import StockRow from './components/StockRow'

// const [값, 값을바꾸는함수] = useState(기본값)
function App() {
  const [다크모드인가, 다크모드값변경] = useState(() =>
    JSON.parse(localStorage.getItem('@theme') ?? 'false'),
  )

  const [검색어, 검색어를바꾸는함수] = useState('')

  const 다크모드토글링 = () => {
    // 다크모드값변경(!다크모드인가)

    const 최신테마의값 = !다크모드인가

    // TODO: 나중에 더 바꾸기

    localStorage.setItem('@theme', JSON.stringify(최신테마의값))

    다크모드값변경(최신테마의값)
  }

  const handleInputChange = (event) => {
    검색어를바꾸는함수(event.target.value)
  }

  const 다크모드스타일 = {
    backgroundColor: 'rgba(3,18,40,0.7)',
    color: '#fff',
  }

  const 라이트모드스타일 = {
    backgroundColor: '#fff',
    color: '#444',
  }

  const 검색조건을거친리스트 =
    검색어 === ''
      ? stocks
      : stocks.filter((stock) => {
          return stock.title
            .toLocaleLowerCase()
            .includes(검색어.toLocaleLowerCase())
        })

  return (
    <div style={다크모드인가 === true ? 다크모드스타일 : 라이트모드스타일}>
      <div onClick={다크모드토글링}>
        {다크모드인가 === true ? (
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-64.png"
            alt=""
          />
        ) : (
          <img
            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_4-64.png"
            alt=""
          />
        )}
      </div>

      <div>
        <input
          placeholder="검색어를 입력해주세요"
          value={검색어}
          onChange={handleInputChange}
        />
      </div>

      <ul>
        {검색조건을거친리스트.map((stock, index) => {
          return (
            <StockRow
              key={stock.stockCode}
              rank={index + 1}
              stockName={stock.title}
              isLike={stock.isLike}
              logoUrl={stock.imageUrl}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
