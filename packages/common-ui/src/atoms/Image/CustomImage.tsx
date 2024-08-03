import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";

interface CustomImageProps extends ImageProps {
  variant?: string;
}

export const CustomImage: React.FC<CustomImageProps> = (props) => {
  const { variant } = props;
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
  return <Image {...filterStyles} src={props.src} alt={props.alt} {...props} />;
};
