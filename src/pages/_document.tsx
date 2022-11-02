import Document, { Head, Html, Main, NextScript } from 'next/document'

import { MODAL_DIV_ID } from '@constants'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id={MODAL_DIV_ID} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
