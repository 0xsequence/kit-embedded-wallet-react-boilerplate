import { Box } from "@0xsequence/design-system";
import TestSendTransaction from "./TestSendTransaction";
import TestSignMessage from "./TestSignMessage";
import TestVerifyMessage from "./TestVerifyMessage";

const Tests = (props: { chainId: number }) => {
  const { chainId } = props;
  return (
    <Box display="flex" flexDirection="column" gap="4">
      <TestSignMessage />
      <TestVerifyMessage chainId={chainId} />
      <TestSendTransaction />
    </Box>
  );
};

export default Tests;
