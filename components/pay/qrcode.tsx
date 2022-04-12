import { Contract } from '../../lib/types'
import Image from 'next/image'
import { prettyNumber } from '../../lib/pretty'

interface QrcodeProps {
  contract: Contract
  setResult: any
}

const Qrcode = ({ contract, setResult }: QrcodeProps) => {
  const { quantity, ticker, value } = contract.collateral
  return (
    <>
      <div className="is-flex" onClick={() => setResult('failure')}>
        <Image
          className="qrcode"
          src="/images/qrcode.svg"
          alt="qrcode"
          height={300}
          width={300}
        />
        <div className="is-flex is-flex-direction-column is-justify-content-center">
          <h2 className="has-text-weight-bold is-size-4 mb-4">
            Pay by Scaning this QR
          </h2>
          <div className="is-flex">
            <div className="has-pink-border info-card px-5 py-4">
              <p className="amount">Amount to deposit</p>
              <p className="quantity">
                {prettyNumber(quantity)} {ticker}
              </p>
              <p className="value">
                US ${prettyNumber((quantity || 0) * value)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="is-size-7">
        In vivamus mi pretium pharetra cursus lacus, elit. Adipiscing eget vel
        ut non duis vitae. Augue mi, bibendum ac imperdiet ipsum sed ornare.
        Facilisis id sem quam elementum euismod ante ut. Ac, pharetra elit, sit
        pharetra a. Eu diam nunc nulla risus arcu, integer nulla diam, est. Nisl
        accumsan potenti mattis consectetur pellentesque.
      </p>
    </>
  )
}

export default Qrcode
