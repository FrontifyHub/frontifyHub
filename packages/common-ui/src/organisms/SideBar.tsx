"use client"
import { Box, Flex, Image, List, ListItem, Spacer, Text } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LanguageOptions from '../molecules/LanguageOptions';
import NavItem from '../molecules/NavItem';
import { ICComponents, ICComponentsSelected, ICDocs, ICDocsSelected, ICGlobal, ICLanguage, ICResources, ICResourcesSelected, ICTemplates, ICTemplatesSelected, ICTheme } from '../atoms'

type NavItemsType = {
  href: string,
  label?: string,
  icon: ReactNode,
  iconSelected?: ReactNode,
  match?: string[]
}

const NAV_PAGE_ITEMS: NavItemsType[] = [
  {
    href: "/home",
    label: "Components",
    icon: <ICComponents />,
    iconSelected: <ICComponentsSelected />,
    match: ["", "/", "/home"]
  },
  {
    href: "/templates",
    label: "Template",
    icon: <ICTemplates />,
    iconSelected: <ICTemplatesSelected />,
    match: ["/templates"]
  },
  {
    href: "/docs",
    label: "Docs",
    icon: <ICDocs />,
    iconSelected: <ICDocsSelected />,
    match: ["/docs"]
  },
  {
    href: "/resources",
    label: "Resources",
    icon: <ICResources />,
    iconSelected: <ICResourcesSelected />,
    match: ["/resources"]

  }
]

const NAV_CONFIG_ITEMS: NavItemsType[] = [
  {
    href: "global",
    icon: <ICGlobal />,
  },
  {
    href: "language",
    icon: <ICLanguage />,
  },
  {
    href: "theme",
    icon: <ICTheme />,
  }
]

export const SideBar = () => {
  const pathname = usePathname();
  const [isLanguageVisible, setLanguageVisible] = useState(false);
  return (
    <List as="aside" width="102px" borderRight="1px solid #A39FA9" height="full" minH={"100vh"}>
      <ListItem display="flex" flexDirection="column" alignItems="center" bg="#9E6CCC" width="100%" height="125px" mb="10px">
        <Image
          src="/images/VSlogo.png"
          alt="Logo"
          width="77px"
          height="50px"
          mt="15px"
        />
        <Box border="1px solid #FFFFFF" borderRadius="5px" mt="10px" p="2px">
          <Text m="3px" color="#FFFFFF" fontSize="11px" textAlign="center">Version 1.0</Text>
        </Box>
      </ListItem>

      <Flex flexDirection="column" gap="20px">
        {
          NAV_PAGE_ITEMS.map((item, index) => {
            const isSelectedItem = !!(item?.match && item.match.includes(pathname))
            return (
              <NavItem
                key={index}
                path={item.href}
                label={item.label}
                icon={isSelectedItem ? item.iconSelected : item.icon}
                isSelected={isSelectedItem}
              />
            )
          }
          )
        }
      </Flex>
      {/* <Flex flexDirection="column" gap="15px" mt="50px">
        {
          NAV_CONFIG_ITEMS.map((item, index) =>
            <NavItem key={index} path={item.href} label={item.label} icon={item.icon} isSelected={false} />
          )
        }
        <LanguageOptions isVisible={isLanguageVisible} />
      </Flex> */}
    </List>
  )
}