import {
  Box,
  Card,
  Collapsible,
  Spinner,
  Text,
  TextInput,
} from "@0xsequence/design-system";
import { ChangeEvent, useState } from "react";
import { Address, Signature } from "viem";
import { usePublicClient } from "wagmi";

const TestVerifyMessage = (props: { chainId: number }) => {
  const { chainId } = props;
  const [message, setMessage] = useState<string>();
  const [address, setAddress] = useState<Address>();
  const [signature, setSignature] = useState<Signature>();
  const publicClient = usePublicClient({ chainId });
  const [isValidSignature, setIsValidSignature] = useState<boolean>(false);
  const [validatedSignature, setValidatedSignature] = useState<boolean>(false);
  const [validatingSignature, setValidatingSignature] =
    useState<boolean>(false);

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress(value as Address);
  };

  const onChangeSignature = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSignature(value as unknown as Signature);
  };

  const verifyMessage = async () => {
    if (!(address && message && signature)) return;
    try {
      setValidatingSignature(true);
      setValidatedSignature(false);
      const result = await publicClient!.verifyMessage({
        address,
        message,
        signature,
      });
      setValidatedSignature(true);
      setIsValidSignature(result);
      setValidatingSignature(false);
    } catch (error) {
      console.error(error);
      setIsValidSignature(false);
      setValidatingSignature(false);
    }
  };

  return (
    <>
      <Collapsible
        label="Verify signature"
        display="flex"
        flexDirection="column"
        gap="8"
      >
        <Box display="flex" flexDirection="column" gap="8" marginBottom="8">
          <TextInput
            name="Address"
            controls="Address"
            numeric={false}
            onChange={onChangeAddress}
          />
          <TextInput
            name="Message"
            controls="Message"
            numeric={false}
            onChange={onChangeMessage}
          />
          <TextInput
            name="Signature"
            controls="Signature"
            numeric={false}
            onChange={onChangeSignature}
          />
          <button
            onClick={verifyMessage}
            type="button"
            disabled={validatingSignature}
            className="margin-left-auto"
          >
            Verify
          </button>
        </Box>
        <Card>
          {validatedSignature ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="8"
              style={{ maxWidth: "700px" }}
            >
              <Text className="break-word">
                Signature is: {isValidSignature ? "Valid" : "Invalid"}
              </Text>
            </Box>
          ) : (
            <Box>
              <Text>Nothing verified yet</Text>
            </Box>
          )}
          {validatingSignature && (
            <Box gap="2" alignItems="center" marginTop="4">
              <Spinner size="sm" />
              <Text variant="small" color="text50">
                Pending...
              </Text>
            </Box>
          )}
        </Card>
      </Collapsible>
    </>
  );
};

export default TestVerifyMessage;
