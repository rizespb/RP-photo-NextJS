import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '@components'
import { ReviewPage } from '@pageComponents'

const Review: NextPage = () => (
  <>
    <Head>
      <title>Отзывы</title>
    </Head>

    <Layout>
      <ReviewPage />
    </Layout>
  </>
)

export default Review
