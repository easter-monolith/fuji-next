import { Asset } from '../../lib/types'
import AssetsHeader from './header'
import AssetsList from './list'
import { fetchAssets } from '../../lib/api'
import { useEffect, useState } from 'react'
import Loading from '../layout/loading'
import SomeError from '../layout/error'

const Assets = () => {
  const [assets, setAssets] = useState<Asset[]>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchAssets()
      .then((data) => {
        setAssets(data.filter((asset: Asset) => asset.isSynthetic))
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading />
  if (!assets) return <SomeError>Error getting assets</SomeError>

  return (
    <section className="section">
      <AssetsHeader />
      <AssetsList assets={assets} />
    </section>
  )
}

export default Assets
