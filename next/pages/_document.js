import Document, { Html, Head, Main, NextScript } from 'next/document'
import { snipcartlib } from '../../config'

const snipcartApiKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <script async src={snipcartlib} />
        </Head>
        <body className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
          <Main />
          <NextScript />

          <div hidden id="snipcart" data-api-key={snipcartApiKey} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
