import { prettyNumber } from '../../lib/pretty'
import { Asset, Contract } from '../../lib/types'
import Spinner from './spinner'
import Summary from '../contract/summary'

interface MarinaProps {
  contract: Contract
  topup: Asset | undefined
  setResult: any
}

const Marina = ({ contract, topup, setResult }: MarinaProps) => {
  return (
    <div className="has-text-centered" onClick={() => setResult('success')}>
      <Spinner />
      <h3>Waiting for confirmation...</h3>
      {topup && (
        <p>
          Topup contract with
          <strong>
            +{prettyNumber(topup.quantity)}
            {topup.ticker}:
          </strong>
        </p>
      )}
      {!topup && <p>Create contract:</p>}
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
