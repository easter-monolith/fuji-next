import { Contract } from "../../lib/types";
import RedeemButton from "../buttons/redeem";
import TopupButton from "../buttons/topup";

interface ContractRowProps {
  contract: Contract
  setRedeem: any
}

const ContractRow = ({ contract, setRedeem }: ContractRowProps) => {
  return (
    <div className="box row">
      <div className="columns level">
        <div className="column is-2">
          <p><strong>{contract.synthetic.quantity} {contract.synthetic.ticker}</strong></p>
        </div>
        <div className="column is-2">
        </div>
        <div className="column is-8 has-text-right">
          <RedeemButton contract={contract} setRedeem={setRedeem} />
          <TopupButton contract={contract} />
        </div>
      </div>
    </div>
  )
}

export default ContractRow
