import { Box, Flex, Image, List, ListItem, Spacer, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavItem from '../organisms/NavItem';
import LanguageOptions from '../molecules/LanguageOptions';
import ComponentsIcon from '../atoms/ComponentsIcon.svg';
import TemplatesIcon from '../atoms/TemplatesIcon.svg';
import DocsIcon from '../atoms/DocsIcon.svg';
import ResourcesIcon from '../atoms/ResourcesIcon.svg';
import GlobalIcon from '../atoms/GlobalIcon.svg';
import LanguageIcon from '../atoms/LanguageIcon.svg';
import ThemeIcon from '../atoms/ThemeIcon.svg';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string>(pathname || "");
  const [isLanguageVisible, setLanguageVisible] = useState(false);
  const isSelected = (path: string) => selected === path;

  const handleSelect = (path: string) => {
    setSelected(path);
    if (path === 'language') {
      setLanguageVisible(!isLanguageVisible);
    } else {
      setLanguageVisible(false);
      
      //global và theme ko dẫn đến route khác
      if (path !== 'global' && path !== 'theme') {
        router.push(path);
      }
      //thêm fuction cho global vs theme
    }
  }

  return (
    <List as="aside" width="102px" position="fixed" borderRight="1px solid #A39FA9" height="full">
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
        <NavItem path="/ComponentsPage" label="Components" icon={<ComponentsIcon />} isSelected={isSelected} onSelect={handleSelect} />
        <NavItem path="/TemplatesPage" label="Template" icon={<TemplatesIcon />} isSelected={isSelected} onSelect={handleSelect} />
        <NavItem path="/Docs" label="Docs" icon={<DocsIcon />} isSelected={isSelected} onSelect={handleSelect} />
        <NavItem path="/Resources" label="Resources" icon={<ResourcesIcon />} isSelected={isSelected} onSelect={handleSelect} />
      </Flex>
      

      <Flex flexDirection="column" gap="15px" mt="50px">
        <NavItem path="global" icon={<GlobalIcon />} isSelected={isSelected} onSelect={handleSelect} />
        <NavItem path="language" icon={<LanguageIcon />} isSelected={isSelected} onSelect={handleSelect} />
        <LanguageOptions isVisible={isLanguageVisible} />
        <NavItem path="theme" icon={<ThemeIcon />} isSelected={isSelected} onSelect={handleSelect} />
      </Flex>
    </List>
  )
}