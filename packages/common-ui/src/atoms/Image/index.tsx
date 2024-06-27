import { Image } from "@chakra-ui/react";
import React from "react";

interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  variant?: string;
}

export const CustomImage = (props: ImageProps) => {
  const { variant, ...rest } = props;
  let filterStyles;
  switch (variant) {
    case "icon":
      filterStyles = {
        _light: { filter: "brightness(0) saturate(100%)" },
        _dark: { filter: "brightness(0) invert(1)" },
        _hover: { filter: "none !important" },
      };
      break;
    default:
      filterStyles = {};
  }
  return (
    <Image {...rest} {...filterStyles} boxSize="5rem" objectFit="contain" />
  );
};
