import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonTheme = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    whiteSpace: "normal",
    padding: "0.5rem 1rem",
  },
  // Styles for the size variations
  sizes: {
    unset: {
      width: "unset",
      height: "unset",
    },
  },
  // Styles for the visual style variations
  variants: {
    borderGradient: () => {
      const fromColor = "frontifyHub.gradientPurple";
      const toColor = "frontifyHub.gradientBlue";

      return {
        border: "none",
        outline: "none",
        position: "relative",
        bgGradient: `linear(to-r, ${fromColor}, ${toColor})`,
        cursor: "pointer",
        zIndex: 1,
        fontSize: "0.75rem",
        _light: {
          _after: {
            "--gap": "2px",
            content: '""',
            position: "absolute",
            top: "var(--gap)",
            right: "var(--gap)",
            bottom: "var(--gap)",
            left: "var(--gap)",
            backgroundColor: "white",
            borderRadius: "4px",
            zIndex: -1,
          },
        },
      };
    },
    solidButton: {
      background: "frontifyHub.violetFR",
      color: "white",
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    size: "unset",
  },
});
