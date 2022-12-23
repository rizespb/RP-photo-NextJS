import { Header } from '@components'

import ContactForm from './components/ContactForm'
import { TEXTS } from './ContactsPage.constants'

const ContactsPage = () => {
  return (
    <>
      <Header title={TEXTS.title} description={TEXTS.description} />

      <section>
        <ContactForm />
      </section>
    </>
  )
}

export default ContactsPage
