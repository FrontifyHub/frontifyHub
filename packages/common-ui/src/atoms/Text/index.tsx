import { Text } from "@chakra-ui/react";
import React from "react";

interface TextProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const GradientText = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="textGradient" {...props}>
      {children}
    </Text>
  );
};

export const Header1 = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="header1" {...props}>
      {children}
    </Text>
  );
};

export const Header2 = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="header2" {...props}>
      {children}
    </Text>
  );
};
