import { Text } from "@0xsequence/design-system";
import React from "react";

export const Missing = (props: { children: React.ReactNode }) => {
  return (
    <Text variant="large" fontWeight="bold" color="text100">
      Missing {props.children}
    </Text>
  );
};
