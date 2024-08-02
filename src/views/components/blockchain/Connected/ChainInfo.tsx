import { Box } from "@0xsequence/design-system";
import { Address, Chain } from "viem";
import ActiveNetwork from "./ActiveNetwork";
import NativeBalance from "./NativeBalance";

const ChainInfo = (props: { chain: Chain; address: Address }) => {
  const { chain, address } = props;
  return (
    <Box marginBottom="8">
      <ActiveNetwork chain={chain} />
      <NativeBalance chain={chain} address={address} />
    </Box>
  );
};

export default ChainInfo;
