import { Select } from "@0xsequence/design-system";
import { Chain } from "viem";
import { useSwitchChain } from "wagmi";

const ChainSwitcher = (props: { chain: Chain }) => {
  const { chain } = props;
  const { chains, switchChainAsync } = useSwitchChain();
  const onSwitchChain = async (chainId: string) => {
    const formmatedChainId = Number(chainId);
    await switchChainAsync({ chainId: formmatedChainId });
  };

  return (
    <Select
      onValueChange={onSwitchChain}
      name="switchChain"
      options={chains?.map((chain) => ({
        label: chain.name,
        value: chain.id.toString(),
      }))}
      defaultValue={chain?.id?.toString()}
    />
  );
};

export default ChainSwitcher;
