import Image from 'next/image'
import { prettyNumber } from 'lib/pretty'
import { Asset } from 'lib/types'

interface BalanceRowProps {
  asset: Asset
}
const BalanceRow = ({ asset }: BalanceRowProps) => {
  return (
    <tr>
      <td>
        <div className="image-container">
          <Image
            src={asset.icon}
            alt="{asset.name} logo"
            height={20}
            width={20}
          />
        </div>
        <span className="ml-5">{asset.ticker}</span>
      </td>
      <td>{prettyNumber(asset.quantity)}</td>
      <style jsx>{`
        td:nth-child(2) {
          text-align: right;
        }
        td:nth-child(2) {
          color: #63159b;
        }
      `}</style>
    </tr>
  )
}

export default BalanceRow
