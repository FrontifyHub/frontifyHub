import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const SolidButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button colorScheme="violetFR" {...props}>
      {children}
    </Button>
  );
};

export const OutlineGradientButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button variant="borderGradient" {...props}>
      {children}
    </Button>
  );
};
