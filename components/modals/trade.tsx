import Image from 'next/image'
import Modal from './modal'

const TradeModal = () => {
  return (
    <Modal id="trade-modal">
      <h3>Trade</h3>
      <p>Trade your assets in this exchanges:</p>
      <div className="links-wrapper">
        <div className="columns my-0">
          <div className="column is-6 py-0">
            <p>
              <a href="#">
                TDEX iOS App
                <span className="icon-container">
                  <Image
                    src="/images/apple.svg"
                    alt="apple logo"
                    height={20}
                    width={20}
                  />
                </span>
              </a>
            </p>
          </div>
          <div className="column is-6 py-0">
            <p>
              <a href="https://play.google.com/store/apps/details?id=io.sevenlabs.app">
                TDEX Android App
                <span className="icon-container">
                  <Image
                    src="/images/google.svg"
                    alt="google logo"
                    height={20}
                    width={20}
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
        <p className="mt-0">
          <a href="https://beta.bitmatrix.app/">
            Bitmatrix
          </a>
        </p>
        <p>
          <a href="http://dex.vulpem.com">
            dex.vulpem.com
          </a>
        </p>
      </div>
      <style jsx>{`
        div.links-wrapper p {
          max-width: 100%;
        }
        div.links-wrapper p a {
          font-size: 1rem;
        }
        span.icon-container {
          position: relative;
          left: 10px;
          top: 4px;
        }
      `}</style>
    </Modal>
  )
}

export default TradeModal
