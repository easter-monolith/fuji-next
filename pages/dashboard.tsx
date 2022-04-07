import type { NextPage } from 'next'
import Activities from '../components/activities'
import Assets from '../components/assets'
import Contracts from '../components/contracts'

const Dashboard: NextPage = () => {
  return (
    <>
      <Assets />
      <Contracts />
      <Activities />
    </>
  )
}

export default Dashboard
