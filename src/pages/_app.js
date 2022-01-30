import GlobalStyle from "../globalStyle";

export default function CustomApp({ Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}