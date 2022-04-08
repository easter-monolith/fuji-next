import { Contract } from "../../lib/types";
import { getContractState } from "../../lib/utils";
import RedeemButton from "../buttons/redeem";
import TopupButton from "../buttons/topup";
import ContractLink from "../contract/link";
import PrettyState from "../contract/state";

interface ContractRowProps {
  contract: Contract
  setRedeem: any
}

const ContractRow = ({ contract, setRedeem }: ContractRowProps) => {
  const { quantity, ticker } = contract.synthetic
  const state = getContractState(contract)
  return (
    <div className="box row">
      <div className="columns level">
        <div className="column is-2">
          <p><strong>{quantity} {ticker}</strong></p>
        </div>
        <div className="column is-2">
          <PrettyState state={state} />
        </div>
        <div className="column is-8 has-text-right">
          <ContractLink contract={contract} />
          <RedeemButton contract={contract} setRedeem={setRedeem} />
          <TopupButton contract={contract} />
        </div>
      </div>
    </div>
  )
}

export default ContractRow
