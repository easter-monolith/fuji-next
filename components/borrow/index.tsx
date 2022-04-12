import { Contract, Offer } from 'lib/types'
import Form from './form'
import Balance from 'components/balance'
import { useEffect, useState } from 'react'
import Info from './info'
import BorrowButton from './button'
import Pay from 'components/pay'

interface BorrowProps {
  offer: Offer
}

const Borrow = ({ offer }: BorrowProps) => {
  const [pay, setPay] = useState(false)
  const [network, setNetwork] = useState('')
  const [title, setTitle] = useState('Borrow')
  const [ratio, setRatio] = useState(offer.collateral.ratio || 0)
  const [contract, setContract] = useState<Contract>(offer)
  const minRatio = offer.collateral.ratio || 150

  useEffect(() => {
    const aux =
      pay && !network
        ? 'Select payment method'
        : pay && network === 'lightning'
        ? 'Deposit via Lightning'
        : pay && network === 'liquid'
        ? 'Deposit via Liquid'
        : 'Borrow'
    setTitle(aux)
  }, [pay, network])

  const topup = 0

  return (
    <section>
      <h1>{title}</h1>
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
              <Pay
                contract={contract}
                network={network}
                setNetwork={setNetwork}
                topup={topup}
              />
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
