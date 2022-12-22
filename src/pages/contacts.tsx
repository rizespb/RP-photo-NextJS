import { NextPage } from 'next'

import { Layout } from '@components'
import { ContactsPage } from '@pageComponents'

const Contacts: NextPage = () => (
  <Layout withPaddings={true}>
    <ContactsPage />
  </Layout>
)

export default Contacts
