import { useContext, useEffect, useState } from 'react'
import { getContracts } from '../../lib/marina'
import { Contract } from '../../lib/types'
import Loading from '../layout/loading'
import { WalletContext } from '../providers'
import ContractsHeader from './header'
import ContractsList from './list'

const Contracts = () => {
  const [showActive, setShowActive] = useState(true)

  return (
    <section>
      <ContractsHeader showActive={showActive} setShowActive={setShowActive} />
      <ContractsList showActive={showActive} />
    </section>
  )
}

export default Contracts
