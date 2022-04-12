import { prettyAmount, prettyAsset, prettyRatio } from 'lib/pretty'
import { Contract } from 'lib/types'
import { getContractRatio, getContractState } from 'lib/utils'
import PrettyState from 'components/contract/state'

interface SummaryProps {
  contract: Contract
}

const Summary = ({ contract }: SummaryProps) => {
  const ratio = getContractRatio(contract)
  const state = getContractState(contract)
  return (
    <div className="has-pink-border">
      <div className="row py-4 px-6">
        <div className="columns">
          <div className="column is-4 info-card">
            <p className="amount">Synthetic</p>
            <p className="quantity">{prettyAsset(contract.synthetic)}</p>
            <p className="value">{prettyAmount(contract.synthetic)}</p>
          </div>
          <div className="column is-4 info-card">
            <p className="amount">Ratio</p>
            <p className="quantity">{prettyRatio(ratio)}%</p>
            <PrettyState state={state} />
          </div>
          <div className="column is-4 info-card">
            <p className="amount">Collateral</p>
            <p className="quantity">{prettyAsset(contract.collateral)}</p>
            <p className="value">{prettyAmount(contract.collateral)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
