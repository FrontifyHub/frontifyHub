"use client";

import { Box, Button, Flex, Image, LightMode, Text } from "@chakra-ui/react";
import { CombineGradient } from "@frontifyHub/common-ui/molecules";
import { useLocalization } from "@frontifyHub/common/localization";
import React from "react";
import { ListIcons } from "@frontifyHub/common-ui/organisms";

type TextIconProps = {
  src: string;
  text: string;
};

const ICONS: TextIconProps[] = [
  {
    src: "html.svg",
    text: "HTML",
  },
  {
    src: "css.svg",
    text: "CSS",
  },
  {
    src: "material.svg",
    text: "Material UI",
  },
  {
    src: "tailwind.svg",
    text: "TailwindCSS",
  },
  {
    src: "typescript.svg",
    text: "Typescript",
  },
  {
    src: "javascript.svg",
    text: "Javascript",
  },
  {
    src: "next.svg",
    text: "Nextjs",
  },
  {
    src: "angular.svg",
    text: "Angular",
  },
  {
    src: "react.svg",
    text: "ReactJS",
  },
];

export const IntroSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      scrollSnapAlign="center"
    >
      <Flex w="100%" justify="space-between" gap="2">
        <Button variant="borderGradient">
          {t("home_section1-releaseButton")}
        </Button>
        <LightMode>
          <Button variant="solidButton">
            {t("home_section1-accessButton")}
          </Button>
        </LightMode>
      </Flex>
      <Image src={`logo.svg`} alt="logi" boxSize="10rem" />
      <Text size="4xl">
        <CombineGradient textGradient="FrontifyHub" prefixText="The" />
      </Text>
      <Text size="4xl">{t("home_section1-header1")}</Text>
      <Text size="2xl" margin="2rem 0" color="gray">
        {t("home_section1-header2")}
      </Text>
      <Text variant="textGradient" size="xl">
        {t("home_section1-convert")}
      </Text>
      <Box margin="3rem">
        <ListIcons columnGap="3rem" icons={ICONS} directionTextIcon="column" />
      </Box>
      <Flex>
        <Image src="down.svg" />
      </Flex>
    </Flex>
  );
};
