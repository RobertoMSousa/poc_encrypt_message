import Link from 'next/link'
import styled from 'styled-components'

const Menu = () => {
  return (
    <ButtonsWrapper>
      <Link href="/wallet">
        <ConnectButton>
          <a>Encrypt the message</a>
        </ConnectButton>
      </Link>
      <Link href="/key">
        <ConnectButton>
          <a>Get the key</a>
        </ConnectButton>
      </Link>
      <Link href="/decrypt">
        <ConnectButton>
          <a>Decrypt the message</a>
        </ConnectButton>
      </Link>
    </ButtonsWrapper>
  )
}

export default Menu

const ButtonsWrapper = styled.div`
  display: inline-grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ConnectButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 50px;
`
