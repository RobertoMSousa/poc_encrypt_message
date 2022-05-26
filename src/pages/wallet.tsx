import { ethers, BigNumber, utils } from 'ethers'
import { useState } from 'react'
import styled from 'styled-components'
import { encryptData } from 'helpers/crypto'

export default function Wallet() {
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [balance, setBalance] = useState<ethers.BigNumber | undefined>(
    BigNumber.from(0)
  )
  const [secretMessage, setSecretMessage] = useState<string | undefined>(
    undefined
  )
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined)

  const [encryptedMessage, setEncryptedMessage] = useState<string | undefined>(
    undefined
  )

  const connectToWallet = async () => {
    if (!window.ethereum) {
      setError('No ethereum browser found')
      return
    } else {
      if (address) {
        setAddress(undefined)
        setBalance(undefined)
        setSecretMessage(undefined)
        setPublicKey(undefined)
        setEncryptedMessage(undefined)
        return
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum)

      await provider.send('eth_requestAccounts', [])

      const signer = provider.getSigner()

      const walletAddress = await signer.getAddress()

      const balance = await signer.getBalance()
      setAddress(walletAddress)
      setBalance(balance)
    }
  }

  const sendSecret = async () => {
    if (!address) {
      setError('Please connect to wallet')
      return
    }
    if (!secretMessage) {
      setError('Please enter a secret message')
      return
    }
    if (!publicKey) {
      setError('Please enter a public key')
      return
    }

    setEncryptedMessage(await encryptData(publicKey, secretMessage))
  }

  return (
    <>
      <WalletWrapper>
        <WalletTitle className="wallet">Wallet connection</WalletTitle>
        {address && <h1>adress: {address}</h1>}
        {balance && address && (
          <h1>balance: {utils.formatEther(balance)} eth</h1>
        )}

        {address && !encryptedMessage && (
          <SecretForm>
            <SecretInput
              placeholder="Enter your secret message"
              value={secretMessage}
              onChange={(e) => setSecretMessage(e.target.value)}
            />
            <PublicKeyInput
              type="text"
              placeholder="Enter public key"
              onChange={(e) => {
                setPublicKey(e.target.value)
              }}
            />
          </SecretForm>
        )}

        {error && <h1>{error}</h1>}

        {address && publicKey && !encryptedMessage && (
          <ConnectButton onClick={sendSecret}>Send Secret</ConnectButton>
        )}

        {encryptedMessage && (
          <SecretResult> secret: {encryptedMessage}</SecretResult>
        )}

        <ConnectButton onClick={connectToWallet}>
          {address ? 'Disconnect' : 'Connect to wallet'}
        </ConnectButton>
      </WalletWrapper>
    </>
  )
}

const SecretResult = styled.h1`
  margin-top: 20px;
  overflow-wrap: anywhere;
`

const WalletWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const WalletTitle = styled.h1`
  color: red;
  padding: 10px;
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

const SecretInput = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  height: inherit;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 80%;
`

const PublicKeyInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  height: inherit;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 20%;
`

const SecretForm = styled.form`
  padding: 10px;
  width: 400px;
  height: 400px;
`
