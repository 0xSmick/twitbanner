import React, { useMemo } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  GlowWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#261432",
  secondary: "#380099",
  text: "#000000",
  background: "#FFFFFF",
  paua: "#27006b",
  melrose: "#d7bfff",
  heliotrope: "#ae80ff",
  orange: "#ffa300",
  gold: "#a5b300",
  white: "#ffffff",
  grandis: "#ffd180",
  yellow: "#ebff00",
  shalimar: "#faffbf",
  dolly: "#f5ff80",
  offwhite: "#ffe8bf",
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = "https://api.devnet.solana.com";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    []
  );

  return (
    <>
      <ChakraProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Component {...pageProps} />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ChakraProvider>
    </>
  );
}
