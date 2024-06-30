import { Box, BoxProps, background } from "@chakra-ui/react";
import React from "react";

interface CustomBoxProps extends BoxProps {
  variant?: string;
}

export const CustomBox: React.FC<CustomBoxProps> = (props) => {
  const { variant, children, margin } = props;
  let filterStyles;
  switch (variant) {
    case "informationBox":
      const fromColor = "frontifyHub.gradientPurple";
      const toColor = "frontifyHub.gradientBlue";

      filterStyles = {
        position: "relative",
        padding: "1rem",
        borderWidth: "0.2rem",
        borderStyle: "solid",
        borderImage: "linear-gradient(to bottom, #8A46C9, #0005FF) 1",
        zIndex: 0,
        _before: {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient: `linear(to-b, ${fromColor}, ${toColor})`,
          bgClip: "border-box",
          opacity: 0.1,
          zIndex: 1,
        },
        _after: {
          content: '""',
          position: "absolute",
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          zIndex: 0,
        },
        _light: {
          _after: {
            border: "0.5rem dotted white",
          },
        },
        _dark: {
          _after: {
            border: "0.5rem dotted #1a202c",
          },
        },
      };
      break;
    default:
      filterStyles = {};
  }
  return (
    <Box sx={filterStyles} margin={margin}>
      {children}
    </Box>
  );
};
