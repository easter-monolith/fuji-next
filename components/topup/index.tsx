import { Asset, Contract, Offer } from '../../lib/types'
import Form from './form'
import Balance from '../balance'
import { useState } from 'react'
import TopupButton from './button'
import Pay from '../pay'
import { getContractRatio } from '../../lib/utils'

interface TopupProps {
  contract: Contract
}

const Topup = ({ contract }: TopupProps) => {
  const [pay, setPay] = useState(false)
  const [ratio, setRatio] = useState(getContractRatio(contract))
  const [topup, setTopup] = useState<Asset>()
  const minRatio = getContractRatio(contract)

  return (
    <section>
      <h1>Topup</h1>
      <div className="row">
        <div className="columns">
          <div className="column is-8">
            {!pay && (
              <>
                <Form
                  contract={contract}
                  ratio={ratio}
                  setRatio={setRatio}
                  setTopup={setTopup}
                />
                <TopupButton
                  contract={contract}
                  minRatio={minRatio}
                  ratio={ratio}
                  setPay={setPay}
                />
              </>
            )}
            {pay && (
              <Pay contract={contract} topup={topup} />
            )}
          </div>
          <div className="column is-4">
            <Balance />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topup
