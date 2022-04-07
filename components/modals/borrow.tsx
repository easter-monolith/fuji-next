import { Contract } from '../../lib/types'
import Summary from '../contract/summary'
import Spinner from '../pay/spinner'
import Modal from './modal'

interface BorrowModalProps {
  contract: Contract | undefined
}

const BorrowModal = ({ contract }: BorrowModalProps) => {
  return (
    <Modal id="borrow-modal">
      {contract && (
        <>
          <Spinner />
          <h3>Waiting for confirmation...</h3>
          <p>Borrow contract:</p>
          <Summary contract={contract} />
          <p className="confirm">
            Confirm this transaction in your Marina wallet
          </p>
        </>
      )}
    </Modal>
  )
}

export default BorrowModal
