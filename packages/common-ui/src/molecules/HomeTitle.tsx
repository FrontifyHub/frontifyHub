import React from "react";
import { GradientText, Header1 } from "../atoms";
import { Flex } from "@chakra-ui/react";

export const HomeTitle = () => {
  return (
    <Flex direction="column" align="center">
      <Header1>
        The&nbsp;
        <GradientText as="span">FrontifyHub</GradientText>
      </Header1>
      <Header1>Website Development Framework</Header1>
    </Flex>
  );
};
