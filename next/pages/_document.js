import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr" >
        <Head />
        <body className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
