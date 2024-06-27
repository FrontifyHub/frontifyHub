import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CustomImage } from "../atoms";

type TextIconProps = {
  src: string;
  text: string;
};

export const TextIcon = ({ src, text }: TextIconProps) => {
  return (
    <Flex direction="column" align="center">
      <CustomImage src={src} alt="icon" variant="icon" />
      <Text>{text}</Text>
    </Flex>
  );
};
