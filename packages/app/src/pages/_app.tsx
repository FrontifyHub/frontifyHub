import { AppProps } from 'next/app';
import RootLayout from '../app/layout';
import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
    
  )
}

export default MyApp;