import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { InformationBox } from "@frontifyHub/common-ui/organisms";
import { useLocalization } from "@frontifyHub/common/localization";

type TextIconProps = {
  src: string;
  text: string;
};

export const SecondSection: React.FC = () => {
  const { t } = useLocalization();

  const ICONS: TextIconProps[] = [
    {
      src: "water.svg",
      text: t("home_section2-list1"),
    },
    {
      src: "ads_click.svg",
      text: t("home_section2-list2"),
    },
    {
      src: "link.svg",
      text: t("home_section2-list3"),
    },
  ];

  return (
    <Flex w="100%" direction="column">
      <Flex align="center" justify="center" gap={4}>
        <Flex direction="column">
          <Text variant="textGradient">{t("home_section2-products")}</Text>
          <Text size="4xl">{t("home_section2-header1")}</Text>
          <Text variant="textGradient" size="4xl">
            {t("home_section2-header2")}
          </Text>
          <Text marginTop="0.5rem">{t("home_section2-header3")}</Text>
          <InformationBox
            title={t("home_section2-infoHeader")}
            description=""
            margin="2rem 0"
          />
          <List spacing={3}>
            {ICONS.map((item, key) => (
              <ListItem key={key} display="flex" gap={5}>
                <Image src={item.src} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
            ))}
          </List>
        </Flex>
        <Box w="50%" h="100%">
          <video autoPlay loop muted>
            <source src="temp_video.mp4" type="video/mp4" />
          </video>
        </Box>
      </Flex>
    </Flex>
  );
};
