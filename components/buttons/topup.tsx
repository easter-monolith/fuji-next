import Link from 'next/link'
import { Contract } from '../../lib/types'

interface TopupButtonProps {
  contract: Contract
}

const TopupButton = ({ contract }: TopupButtonProps) => {
  return (
    <Link href={`/dashboard/topup/${contract.txid}`}>
      <a className="button ml-3">Topup</a>
    </Link>
  )
}

export default TopupButton
