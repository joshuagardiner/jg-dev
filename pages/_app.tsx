import type { AppProps } from "next/app";
import "../styles/globals.scss";

// eslint-disable-next-line jsdoc/require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
