import { prettyNumber } from '../../lib/pretty'
import { Asset, Contract, Ticker } from '../../lib/types'
import Spinner from './spinner'
import Summary from '../contract/summary'

interface IntroProps {
  ticker: Ticker
  topup: number | undefined
}

const Intro = ({ ticker, topup }: IntroProps) => {
  if (topup)
    return (
      <p>
        Topup contract with{' '}
        <strong>
          +{prettyNumber(topup)} {ticker}:
        </strong>
      </p>
    )
  return <p>Create contract:</p>
}

interface MarinaProps {
  contract: Contract
  topup: number | undefined
  setResult: any
}

const Marina = ({ contract, topup, setResult }: MarinaProps) => {
  const { ticker } = contract.collateral
  return (
    <div className="has-text-centered" onClick={() => setResult('success')}>
      <Spinner />
      <h3>Waiting for confirmation...</h3>
      <Intro ticker={ticker} topup={topup} />
      <Summary contract={contract} />
      <p className="confirm">Confirm this transaction in your Marina wallet</p>
      <style jsx>{`
        h3 {
          color: #6b1d9c;
        }
      `}</style>
    </div>
  )
}

export default Marina
