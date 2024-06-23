import { Image } from "@chakra-ui/react";
import React from "react";

interface ImageProps {
  [key: string]: any;
}

export const IconImage = ({ ...props }: ImageProps) => {
  return (
    <Image
      boxSize="5rem"
      objectFit="contain"
      _light={{ filter: "brightness(0) saturate(100%)" }}
      _dark={{ filter: "brightness(0) invert(1)" }}
      _hover={{ filter: "none !important" }}
      {...props}
    />
  );
};
