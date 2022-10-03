import DashBoard from 'containers/dashboard/DashBoard'
import { renderMainLayout } from 'layouts/main/main.layout'
import { PageWithLayout } from 'models/common.model'
import type { NextPage } from 'next'

const Index: PageWithLayout & NextPage = () => {
  return <DashBoard />
}

export default Index
