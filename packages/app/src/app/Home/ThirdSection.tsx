import {
  Box,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useLocalization } from "@frontifyHub/common/localization";

type TabHeader = {
  title: string;
  desc: string;
};

const TABEHEADER: TabHeader[] = [
  { title: "Application UI", desc: "Form layouts, tables, modal dialogs" },
  { title: "Application UI", desc: "Form layouts, tables, modal dialogs" },
];

export const ThirdSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <Flex w="100%" direction="column" align="center">
      <Text size="4xl">
        The&nbsp;
        <Text variant="textGradient" as="span">
          FrontifyHub
        </Text>
        &nbsp;templates
      </Text>

      <Text size="xl" color="gray">
        Your project can look as good as these! Check them out, get inspired!
        The best template.
      </Text>

      <Tabs w="100%" isFitted mt="2rem">
        <TabList>
          {TABEHEADER.map((item, index) => (
            <Tab key={index}>
              <Flex direction="column">
                <Text variant="textGradient" fontWeight={700}>
                  {item.title}
                </Text>
                <Text>{item.desc}</Text>
              </Flex>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={4} spacing={10}>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={4} spacing={10}>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
              <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
