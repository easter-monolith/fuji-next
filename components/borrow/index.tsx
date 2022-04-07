import { Asset, Contract, Offer } from '../../lib/types'
import Form from './form'
import Balance from '../balance'
import { useState } from 'react'
import Info from './info'
import BorrowButton from './button'
import Pay from '../pay'

interface BorrowProps {
  offer: Offer
}

const Borrow = ({ offer }: BorrowProps) => {
  const [pay, setPay] = useState(false)
  const [ratio, setRatio] = useState(offer.collateral.ratio || 0)
  const [contract, setContract] = useState<Contract>(offer)
  const minRatio = offer.collateral.ratio || 150

  let topup: Asset | undefined

  return (
    <section>
      <h1>Borrow</h1>
      <div className="row">
        <div className="columns">
          <div className="column is-8">
            {!pay && (
              <>
                <Form
                  contract={contract}
                  setContract={setContract}
                  ratio={ratio}
                  setRatio={setRatio}
                />
                <Info contract={contract} />
                <BorrowButton
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

export default Borrow
