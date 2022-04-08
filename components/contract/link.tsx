import { Contract } from "../../lib/types"

interface ContractLinkProps {
  contract: Contract
}

const ContractLink = ({ contract }: ContractLinkProps) => {
  const base = 'https://blockstream.info/liquid/tx/';
  const href = `${base}${contract.txid}`
  const txid = contract?.txid?.substring(0, 8)
  return (
    <a href={href} className="button external">
      {txid}...
    </a>
  )
}

export default ContractLink
