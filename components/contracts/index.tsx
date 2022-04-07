import { useEffect, useState } from 'react'
import { getContracts } from '../../lib/marina'
import { Contract } from '../../lib/types'
import SomeError from '../layout/error'
import Loading from '../layout/loading'
import ContractsHeader from './header'
import ContractsList from './list'

const Contracts = () => {
  const [contracts, setContracts] = useState<Contract[]>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getContracts()
      .then((data) => {
        setContracts(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading />
  if (!contracts) return <SomeError>Error getting contracts</SomeError>

  return (
    <section className="section">
      <ContractsHeader />
      <ContractsList contracts={contracts} />
    </section>
  )
}

export default Contracts
