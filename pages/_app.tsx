import type { AppProps } from "next/app";
import { K2D } from "@next/font/google"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import Header from "../components/Header";


const k2d = K2D({subsets:['latin'], weight:'500'});
// This is the chainId your dApp will work o
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={k2d.className}>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Unchained Marketplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NFT WOLF Marketplace"
        />
        <meta
          name="keywords"
          content="Unchained Wolfs, Marketplace, NFT Marketplace"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
    </main>
  );
}

export default MyApp;
