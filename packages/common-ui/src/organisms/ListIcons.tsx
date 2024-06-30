import { ChakraProps, Flex, FlexProps, chakra } from "@chakra-ui/react";
import React from "react";
import { TextIcon } from "../molecules";

type IconItem = { src: string; text: string };

type ListIconsProps = {
  icons: IconItem[];
  directionTextIcon?: "row" | "column";
} & FlexProps &
  ChakraProps;

export const ListIcons: React.FC<ListIconsProps> = ({
  icons,
  directionTextIcon = "row",
  columnGap,
  direction,
}) => {
  return (
    <Flex columnGap={columnGap} direction={direction}>
      {icons.map((item: IconItem, key: number) => (
        <TextIcon
          key={key}
          src={item.src}
          text={item.text}
          direction={directionTextIcon}
        />
      ))}
    </Flex>
  );
};
