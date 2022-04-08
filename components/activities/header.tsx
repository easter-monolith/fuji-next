import { Dispatch, SetStateAction, useState } from 'react'
import { ActivityType } from '../../lib/types'

interface ActivitiesHeaderProps {
  setActivityType: Dispatch<SetStateAction<ActivityType>>
}

const ActivitiesHeader = ({ setActivityType }: ActivitiesHeaderProps) => {
  const change = (e: any) => setActivityType(e.target.value)
  return (
    <div className="header level mb-4">
      <div className="level-left">
        <div className="level-item">
          <h2>Activity</h2>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <p><strong>Filter by:</strong></p>
          <div className="select is-rounded is-primary is-small ml-4">
            <select onChange={change}>
              <option value={ActivityType.Creation}>{ActivityType.Creation}</option>
              <option value={ActivityType.Redeemed}>{ActivityType.Redeemed}</option>
              <option value={ActivityType.Topup}>{ActivityType.Topup}</option>
              <option value={ActivityType.Liquidated}>{ActivityType.Liquidated}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesHeader
