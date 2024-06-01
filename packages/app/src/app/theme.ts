"use client"
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"; 
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

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
    }
})


const colors = {
    frontifyHub: {
        yellow: "#ffc800",
        blue: "#3671f0",
        green: "#20b893",
        gray: "#e9ebed",
        black: "#273b4a",
        red: "#ec615b",
        orange: "#f39034",
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
};

const Progress = {
    baseStyle: {
        filledTrack: {
            bg: 'rgba(0, 0, 0, 0.3)'
        }
    }
}

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

const Heading = {
    baseStyle: {
        // fontWeight: "semibold"
    },
    sizes: {
        xl: {
            letterSpacing: "tighter",
        },
    },
    variants: {
        allCaps: {
            textTransform: "uppercase",
        },
    },
    defaultProps: {
        // size: "xl",
        // lineHeight: "shorter",
    },
};

const Text = {
    baseStyle: {
        // fontSize: "xl"
    },
    defaultProps: {},
};

const Button = {
    baseStyle: {
        borderRadius: "0",
        fontWeight: "600",
    },
};

const frontifyHubTheme = extendTheme(
    {
        initialColorMode: "light",
        useSystemColorMode: false,
        breakpoints,
        colors,
        ...typography,
        components: {
            Heading,
            Text,
            Button,
            Progress
        },
    },
    withDefaultColorScheme({
        colorScheme: "black",
        components: ["Button"],
    })
);

export default frontifyHubTheme;