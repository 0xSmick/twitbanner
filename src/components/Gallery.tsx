import { useWalletNfts } from "@nfteyez/sol-rayz-react";
import { Options } from "@nfteyez/sol-rayz";

const Gallery = (publicKey: any, connection: any) => {
  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: publicKey,
    connection,
  });

  if (error) {
    console.log(error);
    console.log(publicKey.toString());
    return <div>Have some error</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return <div>Wallet have {nfts?.length} NFTs</div>;
};

export default Gallery;
