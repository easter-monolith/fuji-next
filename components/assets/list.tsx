import { Asset } from '../../lib/types'
import AssetRow from './row'

interface AssetsListProps {
  assets: Asset[]
}

const AssetsList = ({ assets }: AssetsListProps) => {
  assets = assets.filter((asset) => asset.isSynthetic)
  return (
    <div className="assets-list">
      {assets && assets.map((asset: Asset, index: number) => (
        <AssetRow key={index} asset={asset} />
      ))}
    </div>
  )
}

export default AssetsList
