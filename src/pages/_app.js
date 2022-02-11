import GlobalStyle from "../globalStyle";
import Head from 'next/head'

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="https://publicdomainvectors.org/tn_img/tikigiki-abstract-element-002.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chat Sharks</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps}  />
    </>
  )
}
export default CustomApp;