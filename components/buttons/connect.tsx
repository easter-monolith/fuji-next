
interface ConnectButtonProps {
  setWallet: any
  wallet: boolean
}

const ConnectButton = ({ setWallet, wallet }: ConnectButtonProps) => {
  const message = wallet ? 'Disconnect' : 'Connect wallet'

  return (
    <button onClick={() => setWallet(!wallet)} className="button is-primary my-auto">
      {message}
    </button>
  )
}

export default ConnectButton
