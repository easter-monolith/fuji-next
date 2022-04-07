import { useState } from 'react'
import { Contract } from '../../lib/types'
import { openModal } from '../../lib/utils'
import RedeemModal from '../modals/redeem'
import ContractRow from './row'

interface ContractsListProps {
  contracts: Contract[]
}

const ContractsList = ({ contracts }: ContractsListProps) => {
  const [redeem, setReedem] = useState<Contract>()
  if (redeem) openModal('redeem-modal')
  return (
    <>
      <div className="contracts-list">
        {contracts && contracts.map((contract: Contract, index: number) => (
          <ContractRow key={index} contract={contract} setRedeem={setReedem} />
        ))}
      </div>
      <RedeemModal contract={redeem} />
    </>
  )
}

export default ContractsList
