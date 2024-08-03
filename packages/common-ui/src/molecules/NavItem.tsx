import { Box, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type NavItemProps = {
  path: string;
  label?: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, icon, isSelected }) => (
  <Link href={path}>
    <ListItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100%"
      padding="10px"
      cursor="pointer"
    >
      {isSelected ? (
        <Box
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          width="3.5px"
          height="45px"
          bg="linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)"
        />
      ) : null}
      <Box
        as="span"
        bgGradient={isSelected ? "linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)" : "none"}
        bgClip={isSelected ? "text" : "unset"}
        color={isSelected ? "transparent" : "#A39FA9"}
        fontSize="24px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {icon}
      </Box>
      {label && (
        <Text
          bgGradient={isSelected ? "linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)" : "none"}
          bgClip={isSelected ? "text" : "unset"}
          color={isSelected ? "transparent" : "#A39FA9"}
          fontSize="14px"
          mt="2px"
          textAlign="center"
        >
          {label}
        </Text>
      )}
    </ListItem>
  </Link>
);

export default NavItem;
