import { Box, NetworkImage, Text } from "@0xsequence/design-system";
import { Chain } from "viem";

const ActiveNetwork = (props: { chain: Chain }) => {
  const { chain } = props;
  return (
    <Box display="flex" gap="2">
      <Box display="flex" gap="3">
        <Text variant="large" fontWeight="bold" color="text100">
          Network:{" "}
        </Text>
        <Box display="flex" gap="1" justifyContent="center">
          <NetworkImage chainId={chain.id} />
          <Text variant="large" fontWeight="bold" color="text100">
            {" "}
            {chain.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveNetwork;
