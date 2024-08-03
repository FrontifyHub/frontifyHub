import { Box, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

type NavItemProps = {
  path: string;
  label?: string;
  icon: React.ReactNode;
  isSelected: (path: string) => boolean;
  onSelect: (path: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, icon, isSelected, onSelect }) => (
  <ListItem
    display="flex"
    flexDirection="column"
    alignItems="center"
    position="relative"
    width="100%"
    padding="10px"
    onClick={() => onSelect(path)}
    cursor="pointer"
  >
    {isSelected(path) && (
      <Box
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        width="3.5px"
        height="45px"
        bg="linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)"
      />
    )}
    <Box
      as="span"
      bgGradient={isSelected(path) ? "linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)" : "none"}
      bgClip="text"
      color={isSelected(path) ? "transparent" : "#A39FA9"}
      fontSize="24px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {icon}
    </Box>
    {label && (
      <Text
        bgGradient={isSelected(path) ? "linear-gradient(180deg, #8A46C9 32.5%, #0005FF 100%)" : "none"}
        bgClip="text"
        fontSize="14px"
        mt="2px"
        textAlign="center"
        color={isSelected(path) ? "transparent" : "#A39FA9"}
      >
        {label}
      </Text>
    )}
  </ListItem>
)

export default NavItem;