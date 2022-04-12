import { prettyNumber } from 'lib/pretty'
import { Contract, Ticker } from 'lib/types'
import { openModal } from 'lib/utils'
import MarinaModal from 'components/modals/marina'
import Image from 'next/image'

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
    <div className="columns">
      <div className="column is-6 my-auto">
        <button
          className="button is-primary"
          onClick={() => openModal('marina-modal')}
        >
          <Image
            src="/images/marina.svg"
            alt="marina logo"
            width={20}
            height={20}
          />
          <span className="ml-2">Deposit with Marina</span>
        </button>
      </div>
      <div className="column is-6 has-pink-border info-card px-5 py-4">
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
      <MarinaModal contract={contract} setResult={setResult} topup={topup} />
    </div>
  )
}

export default Marina
