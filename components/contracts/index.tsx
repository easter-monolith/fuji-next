import { useEffect, useState } from 'react'
import { getContracts } from '../../lib/marina'
import { Contract } from '../../lib/types'
import SomeError from '../layout/error'
import Loading from '../layout/loading'
import ContractsHeader from './header'
import ContractsList from './list'

const Contracts = ({ wallet }) => {
  const [isLoading, setLoading] = useState(false)
  const [showActive, setShowActive] = useState(true)
  const [contracts, setContracts] = useState<Contract[]>()

  useEffect(() => {
    setLoading(true)
    getContracts()
      .then((data) => {
        setContracts(data)
        setLoading(false)
      })
  }, [wallet])

  if (isLoading) return <Loading />

  const filteredContracts = showActive ? contracts : [];

  return (
    <section>
      <ContractsHeader showActive={showActive} setShowActive={setShowActive} />
      <ContractsList contracts={filteredContracts} />
    </section>
  )
}

export default Contracts
