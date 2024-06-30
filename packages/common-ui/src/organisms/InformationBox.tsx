import React from "react";
import { ChakraProps, Container, Flex, Image, Text } from "@chakra-ui/react";
import { CustomBox } from "../atoms";

type InformationBoxProps = {
  title: string;
  description: string;
} & ChakraProps;

export const InformationBox: React.FC<InformationBoxProps> = ({
  title,
  description,
  margin,
}) => {
  return (
    <CustomBox variant="informationBox" margin={margin}>
      <Flex>
        <Image src="informationbox.svg" />
        <Text variant="textGradient">{title}</Text>
      </Flex>
      <Container>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Container>
    </CustomBox>
  );
};
