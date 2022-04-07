import Link from 'next/link'
import { Contract } from '../../lib/types'

interface TopupButtonProps {
  contract: Contract
}

const TopupButton = ({ contract }: TopupButtonProps) => {
  return (
    <Link href={`/topup/${contract.txid}`}>
      <a className="button">Topup</a>
    </Link>
  )
}

export default TopupButton
