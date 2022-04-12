import { useState } from 'react'
import { Asset, Contract } from '../../lib/types'
import Network from './network'
import Qrcode from './qrcode'
import Result from './result'
import Marina from './marina'

interface PayProps {
  contract: Contract
  network: string
  setNetwork: any
  topup: number
}

const Pay = ({ contract, network, setNetwork, topup }: PayProps) => {
  const ticker = contract.collateral.ticker
  const [result, setResult] = useState('')
  const qrcode = !result && network === 'lightning'
  const marina = !result && network === 'liquid'
  return (
    <div className='box has-pink-border py-6 px-6'>
      {!network && <Network ticker={ticker} setNetwork={setNetwork} />}
      {qrcode && <Qrcode contract={contract} setResult={setResult} /> }
      {marina && <Marina contract={contract} topup={topup} setResult={setResult} /> }
      {result && <Result contract={contract} result={result} /> }
    </div>
  )
}

export default Pay
