import { Contract } from "../../lib/types"

interface RedeemButtonProps {
  contract: Contract
  setRedeem: any
}

const RedeemButton = ({ contract, setRedeem }: RedeemButtonProps) => {
  return (
    <button onClick={() => setRedeem(contract)} className="button is-primary">Redeem</button>
  )
}

export default RedeemButton
