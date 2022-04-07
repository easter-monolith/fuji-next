import { Contract } from "../../lib/types"


interface TopupButtonProps {
  contract: Contract
  minRatio: number
  ratio: number
  setPay: any
}

const TopupButton = ({ contract, minRatio, ratio, setPay }: TopupButtonProps) => {
  return <button>Topup</button>
}

export default TopupButton
