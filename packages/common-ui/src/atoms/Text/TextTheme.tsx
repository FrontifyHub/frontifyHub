import { defineStyleConfig } from "@chakra-ui/react";

export const TextTheme = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    textGradient: () => {
      const fromColor = "frontifyHub.gradientPurple";
      const toColor = "frontifyHub.gradientBlue";

      return {
        bgGradient: `linear(to-l, ${fromColor}, ${toColor})`,
        bgClip: "text",
      };
    },
    header1: {
      fontWeight: 900,
      fontSize: "5xl",
    },
    header2: {
      fontWeight: 500,
      fontSize: "2xl",
      color: "gray",
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
