import { Text } from "@chakra-ui/react";
import React from "react";

type CombineGradientProps = {
  textGradient?: string;
  prefixText?: string;
  postfixText?: string;
};

export const CombineGradient = (props: CombineGradientProps) => {
  return (
    <>
      {props.prefixText}&nbsp;
      <Text as="span" variant="textGradient">
        {props.textGradient}
      </Text>
      &nbsp;{props.postfixText}
    </>
  );
};
