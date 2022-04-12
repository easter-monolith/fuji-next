import Modal from './modal'

const TradeModal = () => {
  return (
    <Modal id="trade-modal">
      <h3>Trade</h3>
      <p>Trade your assets in this exchanges:</p>
      <div className="links-wrapper">
        <p>
          <a href="https://play.google.com/store/apps/details?id=io.sevenlabs.app">
            TDEX Mobile App
          </a>
        </p>
        <p>
          <a href="https://beta.bitmatrix.app/">Bitmatrix</a>
        </p>
        <p>
          <a href="http://dex.vulpem.com">dex.vulpem.com</a>
        </p>
      </div>
    </Modal>
  )
}

export default TradeModal
