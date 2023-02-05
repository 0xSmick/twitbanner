import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar";
import Gallery from "@/components/Gallery";
import { Box, Flex, VStack, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fetchNfts, setFetchNfts] = useState(false);
  const [nfts, setNfts] = useState([]);
  const { connection } = useConnection();
  const { wallet, publicKey } = useWallet();

  if (wallet) {
    console.log(wallet);
  }

  return (
    <Box>
      <NavBar />
      <Flex>
        <VStack padding={"16"}>
          <Button
            colorScheme="teal"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Fetch NFTs
          </Button>
          <Gallery publicKey={publicKey} connection={connection} />
        </VStack>
      </Flex>
    </Box>
  );
}
