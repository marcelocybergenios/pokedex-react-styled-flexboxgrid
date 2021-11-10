import React from "react";
import { StyledText } from "./styles";

export const Text = ({ children, variant, color }) => {
  return (
    <StyledText variant={variant} color={color}>
      {children}
    </StyledText>
  );
};
