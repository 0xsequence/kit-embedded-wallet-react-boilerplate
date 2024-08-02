import { Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import ChainInfo from "./ChainInfo";
import Disconnect from "./Disconnect";
import Tests from "./Tests";

const Connected = () => {
  const { address, chain, chainId } = useAccount();
  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <Disconnect />
      {chain && <ChainInfo chain={chain} address={address!} />}
      <Tests chainId={chainId!} />
    </>
  );
};

export default Connected;
