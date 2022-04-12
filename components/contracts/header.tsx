interface ContractsHeaderProps {
  showActive: boolean
  setShowActive: any
}

const ContractsHeader = ({
  showActive,
  setShowActive,
}: ContractsHeaderProps) => {
  const isSelected = (bool: boolean) => {
    if (showActive === bool) return 'selected'
    return
  }

  return (
    <div className="header level mb-4">
      <div className="level-left">
        <div className="level-item">
          <h2>Contracts</h2>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <p>
            <strong>Show:</strong>
          </p>
          <p className="ml-3">
            <a className={isSelected(true)} onClick={() => setShowActive(true)}>
              Active
            </a>
            &nbsp;|&nbsp;
            <a
              className={isSelected(false)}
              onClick={() => setShowActive(false)}
            >
              Expired
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        a.selected {
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}

export default ContractsHeader
