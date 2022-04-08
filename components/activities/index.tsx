import { useEffect, useState } from 'react'
import { Activity, ActivityType } from '../../lib/types'
import ActivityHeader from './header'
import ActivitiesList from './list'
import { getActivities } from '../../lib/marina'
import Loading from '../layout/loading'
import SomeError from '../layout/error'

const Activities = () => {
  const [activityType, setActivityType] = useState(ActivityType.Creation)
  const [activities, setActivities] = useState<Activity[]>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getActivities()
      .then((data) => {
        setActivities(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading />
  if (!activities) return <SomeError>Error getting activities</SomeError>

  const filteredActivities = activities?.filter((a) => a.type === activityType)

  return (
    <section>
      <ActivityHeader setActivityType={setActivityType} />
      <ActivitiesList activities={filteredActivities} />
    </section>
  )
}

export default Activities
