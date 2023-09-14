import styled from 'styled-components'

function StockRow({ rank, stockName, isLike, logoUrl }) {
  return (
    <Container>
      <span>{rank}</span>
      <LogoImage src={logoUrl} />
      <span>{stockName}</span>
      <IconHeart isLike={isLike} />
    </Container>
  )
}

const Container = styled.li`
  display: flex;
  align-items: center;
  list-style: none;

  /* & img {
  } */
`

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`

function IconHeart({ isLike }) {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="css-1lfmj41 e16ieg0k0"
      width={24}
      height={24}
    >
      <path
        fill={isLike ? 'rgb(240, 68, 82)' : 'rgba(0,25,54,0.31)'}
        fillOpacity="0.8"
        fillRule="evenodd"
        d="M10.904 21.527c.666.44 1.526.44 2.19 0 2.115-1.396 6.72-4.733 8.704-8.467 2.615-4.926-.456-9.838-4.515-9.838-2.315 0-3.707 1.209-4.477 2.248a.997.997 0 01-1.613 0c-.77-1.04-2.162-2.248-4.476-2.248-4.06 0-7.131 4.912-4.515 9.838 1.982 3.734 6.588 7.071 8.702 8.467"
      ></path>
    </svg>
  )
}

export default StockRow
