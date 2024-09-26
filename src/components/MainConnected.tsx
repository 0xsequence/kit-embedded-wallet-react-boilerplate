import { Box, Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import ChainInfo from "./ChainInfo";
import Disconnector from "./Disconnector";
import TestSignMessage from "./TestSignMessage";
import TestVerifyMessage from "./TestVerifyMessage";
import TestSendTransaction from "./TestSendTransaction";
import { Missing } from "./Missing";

const MainConnected = () => {
  const { address, chain, chainId } = useAccount();
  if (!address) {
    return <Missing>an address</Missing>;
  }
  if (!chain) {
    return <Missing>a chain</Missing>;
  }
  if (!chainId) {
    return <Missing>a chainId</Missing>;
  }
  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <Disconnector />
      <ChainInfo chain={chain} address={address} />
      <Box display="flex" flexDirection="column" gap="4">
        <TestSignMessage />
        <TestVerifyMessage chainId={chainId} />
        <TestSendTransaction chainId={chainId} />
      </Box>
    </>
  );
};

export default MainConnected;
