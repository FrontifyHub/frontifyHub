import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IconImage } from "../atoms";

interface TextIconProps {
  src: string;
  text: string;
  [key: string]: any;
}

export const TextIcon = ({ src, text, ...props }: TextIconProps) => {
  return (
    <Flex direction="column" align="center" {...props}>
      <IconImage src={src} alt="icon" />
      <Text>{text}</Text>
    </Flex>
  );
};
