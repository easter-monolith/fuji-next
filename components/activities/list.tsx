import { Activity } from '../../lib/types'
import ActivityRow from './row'

interface ActivitiesListProps {
  activities: Activity[]
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
  return (
    <div className="activity-list">
      {activities && activities.map((activity: Activity, index: number) => (
        <ActivityRow key={index} activity={activity} />
      ))}
      <style jsx>{`
        .activity-list {
          background-color: #fff;
          margin-top: 20px;
          padding: 20px;
        }
      `}</style>
    </div>
  )
}

export default ActivitiesList
