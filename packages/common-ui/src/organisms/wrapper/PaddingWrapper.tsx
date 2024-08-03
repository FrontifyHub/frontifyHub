import React, { ReactNode } from "react"
import { Box } from "@chakra-ui/react"
import { Size } from "@frontifyHub/common-ui/variant";

const variant: Record<Size, { horizontal: string; vertical: string }> = {
  xs: {
    horizontal: '12',
    vertical: '24'
  },
  sm: {
    horizontal: '24',
    vertical: '32'
  },
  md: {
    horizontal: '32',
    vertical: '44',
  },
  lg: {
    horizontal: '44',
    vertical: '56',
  },
  xl: {
    horizontal: '56',
    vertical: '64',
  },
  xxl: {
    horizontal: '64',
    vertical: '72',
  },
};

type PaddingWrapperProps = {
  variant: keyof typeof variant;
  children: ReactNode
}

export const PaddingWrapper = ({ variant: size, children }: PaddingWrapperProps) => {
  const padding = variant[size];
  return (
    <Box px={padding.horizontal} py={padding.vertical}>
      {children}
    </Box>
  )
}