import { useEffect, useState } from 'react'
import { fetchAssets } from '../../lib/api'
import { Asset } from '../../lib/types'
import Loading from '../layout/loading'
import BalanceRow from './row'

const Balance = () => {
  const [assets, setAssets] = useState<Asset[]>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchAssets().then((data) => {
      setAssets(data)
      setLoading(false)
    })
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className="box has-pink-border">
      <h3>Your balance</h3>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>
                <abbr title="Quantity" />
                Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {assets &&
              assets.map((asset, index) => (
                <BalanceRow key={index} asset={asset} />
              ))}
          </tbody>
        </table>
      <style jsx>{`
        table {
          font-size: 0.9rem;
        }
        td:nth-child(2),
        th:nth-child(2) {
          text-align: right;
        }
        td:nth-child(2) {
          color: #63159b;
        }
        img {
          height: 20px;
          position: relative;
          top: 4px;
        }
      `}</style>
    </div>
  )
}

export default Balance
