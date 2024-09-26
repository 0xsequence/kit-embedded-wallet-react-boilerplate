import {
  Box,
  Card,
  Collapsible,
  Spinner,
  Text,
  TextInput,
} from "@0xsequence/design-system";
import { ChangeEvent, useEffect, useState } from "react";
import { useSignMessage } from "wagmi";

const TestSignMessage = () => {
  const [message, setMessage] = useState<string>();
  const { isPending, data, signMessage: signMessageHook } = useSignMessage();
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const signMessage = () => {
    if (!message) return;

    signMessageHook({ message });
  };

  const copySignature = () => {
    if (!data) return;
    window.navigator.clipboard.writeText(data);
    setTextCopied(true);
  };

  useEffect(() => {
    if (textCopied)
      setTimeout(() => {
        setTextCopied(false);
      }, 2000);
  }, [textCopied]);

  return (
    <>
      <Collapsible
        label="Sign Message"
        display="flex"
        flexDirection="column"
        gap="8"
      >
        <Box display="flex" flexDirection="column" gap="8" marginBottom="8">
          <TextInput
            name="Message"
            controls="Message"
            numeric={false}
            onChange={onChangeMessage}
          />
          <button
            onClick={signMessage}
            type="button"
            disabled={isPending}
            className="margin-left-auto"
          >
            Sign
          </button>
        </Box>
        <Card>
          {data ? (
            <Box
              display="flex"
              flexDirection="column"
              gap="8"
              style={{ maxWidth: "700px" }}
            >
              <Text className="break-word">Signature: {data}</Text>
              <button onClick={copySignature} className="margin-left-auto">
                {!textCopied ? "Copy" : "Copied"}
              </button>
            </Box>
          ) : (
            <Box>
              <Text>Nothing signed yet</Text>
            </Box>
          )}
          {isPending && (
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

export default TestSignMessage;
