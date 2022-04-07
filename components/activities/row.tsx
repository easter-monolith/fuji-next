import { prettyAgo } from "../../lib/pretty";
import { Activity } from "../../lib/types";
import Image from 'next/image'

interface ActivityRowProps {
  activity: Activity
}

const ActivityRow = ({ activity }: ActivityRowProps) => {
  const { createdAt, contract, message, txid } = activity
  const icon = contract.synthetic.icon || ''
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <Image
            src={icon}
            alt="asset logo"
            height={30}
            width={30}
          />
        </div>
        <div className="level-item">
          <p>{message}</p>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <a href="https://blockstream.info/liquid/tx/{txid}" className="button external">
            {txid.substring(0, 8)}...
          </a>
        </div>
        <div className="level-item">
          <p className="time">{prettyAgo(createdAt)}</p>
        </div>
      </div>
      <style jsx>{`
        img {
          height: 60px;
          padding: 10px;
        }
        p {
          margin: 0;
        }
        p.time {
          color: #6b1d9c;
          font-weight: 700;
          margin: auto 10px;
        }
        div.level {
          border-bottom: 1px solid #aaa;
        }
      `}</style>
    </div>
  )
}

export default ActivityRow
