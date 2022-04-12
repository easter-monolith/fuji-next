import { prettyNumber } from 'lib/pretty'
import { Contract, Ticker } from 'lib/types'
import Spinner from './spinner'
import Summary from 'components/contract/summary'
import { openModal } from 'lib/utils'
import MarinaModal from 'components/modals/marina'

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
  const { ticker, value } = contract.collateral
  const quantity = topup || contract.collateral.quantity
  return (
    <div className="is-flex">
      <MarinaModal contract={contract} setResult={setResult} topup={topup} />
      <button
        onClick={() => openModal('marina-modal')}
        className="button is-primary is-large my-auto mr-6"
      >
        Deposit with Marina
      </button>
      <div className="has-pink-border info-card px-5 py-4">
        <p className="amount">Amount to deposit</p>
        <div className="is-flex is-justify-content-space-between">
          <p className="quantity my-auto">
            {prettyNumber(quantity)} {ticker}
          </p>
          <p className="value my-auto">
            US ${prettyNumber((quantity || 0) * value)}
          </p>
        </div>
      </div>
      <style jsx>{`
        div.info-card {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Marina
