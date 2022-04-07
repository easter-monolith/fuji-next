import { Contract } from "../../lib/types"
import Summary from "../contract/summary"
import Spinner from "../pay/spinner"
import Modal from "./modal"

interface RedeemModalProps {
  contract: Contract|undefined
}

const RedeemModal = ({ contract }: RedeemModalProps) => {
  return (
    <Modal id='redeem-modal'>
      {contract &&
        <>
          <Spinner />
          <h3>Waiting for confirmation...</h3>
          <p>Redeem contract:</p>
          <Summary contract={contract} />
          <p className="confirm">Confirm this transaction in your Marina wallet</p>
        </>
      }
    </Modal>
  )
}

export default RedeemModal
