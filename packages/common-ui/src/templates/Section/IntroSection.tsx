import { Button, Flex, Image, LightMode, Text } from "@chakra-ui/react";
import React from "react";
import { ListIcons } from "../../organisms";
import { CombineGradient } from "../../molecules";

type Title = {
  release?: string;
  access?: string;
  logo?: string;
  header2?: string;
  convert?: string;
  textGradient?: string;
  header1?: string;
};

interface IntroSectionProps {
  title: Title;
}

export const IntroSection = ({ title }: IntroSectionProps) => {
  return (
    <Flex w="100%" direction="column" align="center">
      <Flex w="100%" justify="space-between" gap="2">
        <Button variant="borderGradient">{title.release}</Button>
        <LightMode>
          <Button variant="solidButton">{title.access}</Button>
        </LightMode>
      </Flex>
      <Image src={`${title.logo}`} alt="logi" boxSize="5rem" margin="2rem" />
      <Text variant="headerLg">
        <CombineGradient textGradient={title.textGradient} prefixText="The" />
      </Text>
      <Text variant="headerLg">{title.header1}</Text>
      <Text variant="headerMd" margin="2rem 0 3rem">
        {title.header2}
      </Text>
      <Text variant="textGradient" fontSize="xl" fontWeight="500">
        {title.convert}
      </Text>
      <ListIcons margin="3rem" />
    </Flex>
  );
};
