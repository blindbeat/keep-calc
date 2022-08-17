import 'styles/globals.css'
import 'styles/utils.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>keep.treat</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default MyApp
