// src/components/templates/ClientLayout.tsx
//"use client";

import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { LocalizationProvider } from '@frontifyHub/common/localization';
import theme from '../../styles/theme';
import Header from './Header';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <LocalizationProvider>
        <Header />
        {children}
      </LocalizationProvider>
    </ChakraProvider>
  )
}

