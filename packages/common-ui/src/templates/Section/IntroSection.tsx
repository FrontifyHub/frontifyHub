import { Flex, Image, LightMode } from "@chakra-ui/react";
import React from "react";
import {
  GradientText,
  Header2,
  OutlineGradientButton,
  SolidButton,
} from "../../atoms";
import { HomeTitle } from "../../molecules";
import { ListIcons } from "../../organisms";

export const IntroSection = ({ title }: any) => {
  return (
    <Flex w="100%" direction="column" align="center">
      <Flex w="100%" justify="space-between" gap="2">
        <OutlineGradientButton>{title.release}</OutlineGradientButton>
        <LightMode>
          <SolidButton>{title.access}</SolidButton>
        </LightMode>
      </Flex>
      <Image src={`${title.logo}`} alt="logi" boxSize="5rem" margin="2rem" />
      <HomeTitle />
      <Header2 margin="2rem 0 3rem">{title.header2}</Header2>
      <GradientText fontSize="xl" fontWeight="500">
        {title.convert}
      </GradientText>
      <ListIcons margin="3rem" />
    </Flex>
  );
};
