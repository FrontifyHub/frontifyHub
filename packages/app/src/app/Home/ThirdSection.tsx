import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CombineGradient } from "@frontifyHub/common-ui/molecules";
import { useLocalization } from "@frontifyHub/common/localization";

export const ThirdSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      scrollSnapAlign="center"
    >
      <Text size="4xl">
        <CombineGradient
          textGradient="FrontifyHub"
          prefixText="The"
          postfixText="templates"
        />
      </Text>
      <Text size="xl" color="gray">
        Your project can look as good as these! Check them out, get inspired!
        The best template.
      </Text>

      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Flex>
        <Image src="up.svg" />
        <Image src="down.svg" />
      </Flex>
    </Flex>
  );
};
