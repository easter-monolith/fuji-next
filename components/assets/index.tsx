import { Asset } from '../../lib/types'
import AssetsHeader from './header'
import AssetsList from './list'
import { fetchAssets } from '../../lib/api'
import { useEffect, useState } from 'react'
import Loading from '../layout/loading'
import SomeError from '../layout/error'

const Assets = () => {
  return (
    <section>
      <AssetsHeader />
      <AssetsList />
    </section>
  )
}

export default Assets
