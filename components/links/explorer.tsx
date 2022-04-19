interface ExplorerLinkProps {
  txid: string
}

const ExplorerLink = ({ txid }: ExplorerLinkProps) => {
  const href = `https://blockstream.info/liquid/tx/${txid}`
  return (
    <a href={href} className="button external">
      🔗 Open in explorer
      <style jsx>{`
        a.external {
          border: 0;
        }
      `}</style>
    </a>
  )
}

export default ExplorerLink
