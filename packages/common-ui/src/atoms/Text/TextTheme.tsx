import { defineStyleConfig } from "@chakra-ui/react";

export const TextTheme = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {
    xl: {
      fontWeight: 500,
      fontSize: "xl",
    },
    "2xl": { fontWeight: 500, fontSize: "2xl" },
    "4xl": {
      fontWeight: 900,
      fontSize: "4xl",
    },
  },
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
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
