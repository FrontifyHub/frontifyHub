"use client";
import { extendTheme } from "@chakra-ui/react";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import {
  BoxTheme,
  ButtonTheme,
  ImageTheme,
  TextTheme,
} from "@frontifyHub/common-ui/atoms";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const baseEditorStyle: SystemStyleFunction = () => ({
  "p, ul, ol, li": {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "-0.28px",
    color: "#273b4a",
    mt: 0,
    mb: 0,
  },
  "* + p": {
    mt: 3,
  },
  a: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "teal.500",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "#273b4a",
    fontWeight: "bold",
    letterSpacing: "normal",
    mt: 0,
    mb: 0,
  },
  h1: {
    fontSize: "28px",
    lineHeight: "40px",
  },
  h2: {
    fontSize: "22px",
    lineHeight: "40px",
  },
  h3: {
    fontSize: "18px",
    lineHeight: "40px",
  },
  "* + h1, * + h2, * + h3": {
    mt: 6,
  },
  "* + ul, * + ol": {
    mt: 3,
  },
});

const colors = {
  frontifyHub: {
    primary: "#A393BF",
    violetFR: "#9E6CCC",
    blackFR: "#1F1F1F",
    blueFR: "#090C9B",
    ivoryFR: "#FBFFF1",
    red: "#ec615b",
    orange: "#f39034",
    gradientPurple: "#8A46C9",
    gradientBlue: "#0005FF",
  },
  blue: {
    50: "rgba(135, 170, 246, 0.15)",
    100: "rgba(39, 59, 74, 0.6)",
    200: "#3671f0",
    300: "#3671f0",
    400: "#3671f0",
    500: "#3671f0",
    600: "#3671f0",
    700: "#3671f0",
    800: "#273b4a",
    900: "#3671f0",
  },
  gray: {
    50: "rgba(39, 59, 74, 0.4)",
    500: "#e9ebed",
  },
  black: {
    50: "#000",
    100: "#000",
    200: "#000",
    300: "#000",
    400: "#000",
    500: "#000",
    600: "#000",
    700: "#000",
    800: "#000",
    900: "#000",
  },
  white: {
    50: "#fff",
    100: "#fff",
    200: "#fff",
    300: "#fff",
    400: "#fff",
    500: "#fff",
    600: "#fff",
    700: "#fff",
    800: "#fff",
    900: "#fff",
  },
  violetFR: {
    50: "#f9f6fc",
    100: "#e8dcf3",
    200: "#d3bde8",
    300: "#bb98db",
    400: "#ad82d4",
    500: "#9868c4",
    600: "#8057a5",
    700: "#674685",
    800: "#573b70",
    900: "#3f2b51",
  },
};

const Progress = {
  baseStyle: {
    filledTrack: {
      bg: "rgba(0, 0, 0, 0.3)",
    },
  },
};

const typography = {
  fonts: {
    heading: `"Hanken Grotesk", "DM Sans"`,
    body: `"Hanken Grotesk", "DM Sans"`,
  },
};

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
  "3xl": "1920px",
};

const frontifyHubTheme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: false,
    breakpoints,
    colors,
    ...typography,
    components: {
      Button: ButtonTheme,
      Image: ImageTheme,
      Text: TextTheme,
      Box: BoxTheme,
    },
  },
  withProse({ baseStyle: baseEditorStyle })
);

export default frontifyHubTheme;
