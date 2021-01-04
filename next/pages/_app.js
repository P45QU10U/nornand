import '../styles/globals.css'
import { EcommerceProvider } from '../context/ecommerceProv'

function MyApp({ Component, pageProps }) {
  return (
    <EcommerceProvider>
      <Component {...pageProps} />
    </EcommerceProvider>
  )
}

export default MyApp
