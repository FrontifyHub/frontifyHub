import { Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";
import { CustomImage } from "../atoms";

type TextIconProps = {
  src: string;
  text: string;
} & FlexProps;

export const TextIcon: React.FC<TextIconProps> = ({ src, text, direction }) => {
  return (
    <Flex direction={direction} align="center" justify="center">
      <CustomImage
        src={src}
        alt="icon"
        variant="icon"
        boxSize="5rem"
        objectFit="contain"
      />
      <Text>{text}</Text>
    </Flex>
  );
};
