import { prettyNumber } from "../../lib/pretty";
import Image from "next/image";
import { Asset, Offer } from "../../lib/types";
import TradeButton from "../buttons/trade";
import FilterButton from "../buttons/filter";

interface AssetRowProps {
  asset: Asset
}

const AssetRow = ({ asset }: AssetRowProps) => {
  return (
    <div className="box row">
      <div className="columns level">
        <div className="column is-flex">
          <div className="pr-4">
            <Image
              alt="asset logo"
              height={60}
              src={asset.icon}
              width={40}
            />
          </div>
          <div className="is-gradient my-auto has-text-weight-bold">
            <p className="is-size-6 mb-0">{asset.name}</p>
            <p className="is-size-6 mb-0">{prettyNumber(asset.quantity)} {asset.ticker}</p>
          </div>
        </div>
        <div className="column">
          <p className="amount is-gradient">
            US ${prettyNumber((asset.quantity || 0) * asset.value)}
          </p>
        </div>
        <div className="column has-text-right">
          <TradeButton />
          <FilterButton ticker={asset.ticker} />
        </div>
      </div>
    </div>
  )
}

export default AssetRow
