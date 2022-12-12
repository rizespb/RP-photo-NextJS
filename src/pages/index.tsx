import type { NextPage } from 'next'

import { Layout } from '@components'
import { MainPage } from '@pageComponents'

const Main: NextPage = () => (
  <Layout withPaddings={false}>
    <MainPage />
  </Layout>
)

export default Main
