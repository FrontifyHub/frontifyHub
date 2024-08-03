import { Inter } from "next/font/google";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./globals.css";
import Header from "../components/templates/Header";

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
            <Header />
            {children}
        </ChakraProvider>
      </body>
    </html>
  );
}