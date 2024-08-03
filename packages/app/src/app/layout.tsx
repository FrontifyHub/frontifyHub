'use client'
import { Inter } from "next/font/google";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import SideBar from "@frontifyHub/common-ui/src/templates/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
            <SideBar />
            {children}
        </ChakraProvider>
      </body>
    </html>
  );
}