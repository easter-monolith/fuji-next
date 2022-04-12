import { openModal } from 'lib/utils'

const TradeButton = () => {
  return (
    <button
      onClick={() => openModal('trade-modal')}
      className="button is-primary"
    >
      Trade
    </button>
  )
}

export default TradeButton
