import { useState } from 'react'
import { Contract } from '../../lib/types'
import { openModal } from '../../lib/utils'
import EmptyState from '../layout/empty'
import RedeemModal from '../modals/redeem'
import ContractRow from './row'

interface ContractsListProps {
  contracts: Contract[] | undefined
}

const ContractsList = ({ contracts }: ContractsListProps) => {
  const [redeem, setReedem] = useState<Contract>()
  if (redeem) openModal('redeem-modal')
  if (!contracts) return <EmptyState>Error getting contracts</EmptyState>
  if (contracts.length === 0) return <EmptyState>No contracts yet</EmptyState>
  return (
    <>
      <RedeemModal contract={redeem} />
      {contracts && contracts.map((contract: Contract, index: number) => (
        <ContractRow key={index} contract={contract} setRedeem={setReedem} />
      ))}
    </>
  )
}

export default ContractsList
