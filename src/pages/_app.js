import GlobalStyle from "../globalStyle";

function CustomApp({ Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default CustomApp;