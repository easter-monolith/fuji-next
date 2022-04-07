import Image from "next/image"
import { Ticker } from "../../lib/types"

interface NetworkProps {
  ticker: Ticker
  setNetwork: any
}

const Network = ({ ticker, setNetwork }: NetworkProps) => {
  const disabled = ticker !== 'LBTC'
  return (
    <div>
      <div className="has-text-centered">
        <h2>Choose how to deposit {ticker}</h2>
        <p>
          <button className="button is-primary" onClick={() => (setNetwork('liquid'))}>
            <Image src="/images/networks/liquid.svg" alt="liquid network logo" height={20} width={20} />
            Liquid
          </button>
          <button className="button is-primary" onClick={() => (setNetwork('lightning'))} disabled={disabled}>
            <Image src="/images/networks/lightning.svg" alt="lightning network logo" height={20} width={20} />
            Lightning
          </button>
        </p>
        {disabled &&
          <p className="has-text-weight-bold is-size-6 mt-4">
            {ticker} swaps in Lightning are still in development.
          </p>
        }
      </div>
      <style jsx>{`
        button {
          margin: auto 1rem;
        }
        img {
          margin-right: 1rem;
          max-height: 1.42rem;
        }
      `}</style>
    </div>
  )
}

export default Network
