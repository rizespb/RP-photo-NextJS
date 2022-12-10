import type { NextPage } from 'next'
import Head from 'next/head'

import { ReviewPage } from '@pageComponents'

const Review: NextPage = () => (
  <>
    <Head>
      <title>Отзывы</title>
    </Head>

    <ReviewPage />
  </>
)

export default Review
