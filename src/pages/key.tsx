import { ethers, utils } from 'ethers'
import { base64 } from 'ethers/lib/utils'
import { useState } from 'react'
import styled from 'styled-components'

export default function Key() {
  const [transactionHash, setTransactionHash] = useState<string | undefined>(
    undefined
  )
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined)

  const [error, setError] = useState<string | undefined>(undefined)
  const [base64Value, setBase64] = useState<string | undefined>(undefined)
  const [requestKey, setRequestKey] = useState<string | undefined>(undefined)

  const getPublicKey = async () => {
    if (!transactionHash) {
      setError('No transaction hash found')
      return
    }
    setError(undefined)

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])

    const transaction = await provider.getTransaction(transactionHash)

    const expandedSig = {
      r: transaction.r || '',
      s: transaction.s,
      v: transaction.v
    }
    const signature = utils.joinSignature(expandedSig)

    let txData
    switch (transaction.type) {
      case 0:
        txData = {
          // gasPrice: transaction.gasPrice,
          gasLimit: transaction.gasLimit,
          value: transaction.value,
          nonce: transaction.nonce,
          data: transaction.data,
          chainId: transaction.chainId,
          to: transaction.to
        }
        break
      case 2:
        txData = {
          gasLimit: transaction.gasLimit,
          value: transaction.value,
          nonce: transaction.nonce,
          data: transaction.data,
          chainId: transaction.chainId,
          to: transaction.to
          // type: 2,
          // maxFeePerGas: transaction.maxFeePerGas,
          // maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
        }
        break
      default:
        throw 'Unsupported tx type'
    }

    const rsTx = await utils.resolveProperties(txData)
    const raw = utils.serializeTransaction(rsTx) // returns RLP encoded tx

    const msgHash = utils.keccak256(raw) // as specified by ECDSA
    const msgBytes = utils.arrayify(msgHash) // create binary hash

    const recoveredPubKey = utils.recoverPublicKey(msgBytes, signature)

    const recoveredAddress = utils.recoverAddress(msgBytes, signature)

    setPublicKey(recoveredPubKey)
    setAddress(recoveredAddress)
    setBase64(base64.encode(utils.computePublicKey(recoveredPubKey, true)))
  }

  const requestPublicKey = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])

    const signer = provider.getSigner()

    const walletAddress = await signer.getAddress()
    setRequestKey(
      await provider.send('eth_getEncryptionPublicKey', [walletAddress])
    )
  }

  return (
    <>
      <WalletWrapper>
        <WalletTitle className="wallet">Get public key from </WalletTitle>
        <TransactioHashForm>
          <label htmlFor="">TransactionHash</label>
          <TransactioHashInput
            type="text"
            placeholder="Enter transaction hash"
            onChange={(e) => {
              setTransactionHash(e.target.value)
            }}
          />
        </TransactioHashForm>
        <ConnectButton onClick={getPublicKey}>Load Public Key</ConnectButton>
        <ConnectButton onClick={requestPublicKey}>
          Request Public Key
        </ConnectButton>

        {/* display public key */}
        {publicKey && <h2>publicKey: {publicKey}</h2>}
        {address && <h2>address: {address}</h2>}

        {base64Value && <h2>base64: {base64Value}</h2>}

        {requestKey && <h2>requestKey: {requestKey}</h2>}

        {/* display error */}
        {error && <ErrorMessage>error: {error}</ErrorMessage>}
      </WalletWrapper>
    </>
  )
}

const ErrorMessage = styled.h2`
  color: red;
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

const TransactioHashInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  height: inherit;
  margin: 0;
  padding: 10px;
  width: 100%;
`

const TransactioHashForm = styled.form`
  padding: 10px;
  width: 400px;
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
