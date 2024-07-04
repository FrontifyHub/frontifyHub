import { useLocalization } from "@frontifyHub/common/localization";
import { CombineGradient } from "@frontifyHub/common-ui/molecules/CombineGradient";
import { Box, VStack, Link, Button, Text, Center } from "@chakra-ui/react";
import Image from 'next/image';
import ComponentIcon from "../../../public/Component.svg";
import TemplateIcon from "../../../public/CarbonTemplate.svg";
import LanguageIcon from "../../../public/HeroiconsLanguage.svg";
import ResourceIcon from "../../../public/ResourcePoolOutline.svg";
import GlobalIcon from "../../../public/Solar Global Linear.svg";
import ThemeColorIcon from "../../../public/FrontifyHub Sun.svg";

export const Header = () => {
    return (
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        height="100vh"
        width="7.08vw"
        bg="#1f1f1f"
        color="white"
        display={{ base: "none", md: "block" }}
      >
        <VStack spacing="5vh" alignItems="center">
          <Box height="18.9vh" width="7.08vw" bg="#9E6CCC">
            <Box mb={4}>
                <Text fontSize="xl" fontWeight="bold" alignContent="center">Logo</Text>
            </Box>
            <Box mb={4}>
            <Text fontSize="sm">v1.0</Text>
          </Box>
        </Box>
  
          <VStack spacing={10} alignItems="center" width="full">
            <Button as={Link} href="#components" variant="link" colorScheme="whiteAlpha">
                <VStack spacing={5}>
                    <Image src={ComponentIcon} alt="Global" width={20} height={20} />
                    <Text fontSize="14">Components</Text>
                </VStack>
            </Button>
            <Button as={Link} href="#templates" variant="link" colorScheme="whiteAlpha">
                <VStack spacing={5}>
                    <Image src={TemplateIcon} alt="Global" width={20} height={20} />
                    <Text fontSize="14">Templates</Text>
                </VStack>
            </Button>
            <Button as={Link} href="#docs" variant="link" colorScheme="whiteAlpha">
                <VStack spacing={5}>
                    <Image src={LanguageIcon} alt="Global" width={20} height={20} />
                    <Text fontSize="14">Docs</Text>
                </VStack>
            </Button>
            <Button as={Link} href="#resources" variant="link" colorScheme="whiteAlpha">
                <VStack spacing={5}>
                    <Image src={ResourceIcon} alt="Global" width={20} height={20} />
                    <Text fontSize="14">Resources</Text>
                </VStack>
            </Button>
          </VStack>
  
          <Box flex="1" />
  
          <VStack spacing={8} alignItems="center" width="full">
            <Button variant="ghost" colorScheme="whiteAlpha">
              <Image src={GlobalIcon} alt="Global" width={24} height={24} />
            </Button>
            <Button variant="ghost" colorScheme="whiteAlpha">
              <Image src={LanguageIcon} alt="Light" width={24} height={24} />
            </Button>
            <Button variant="ghost" colorScheme="whiteAlpha">
              <Image src={ThemeColorIcon} alt="Language" width={24} height={24} />
            </Button>
          </VStack>
        </VStack>
      </Box>
      
    );
  };