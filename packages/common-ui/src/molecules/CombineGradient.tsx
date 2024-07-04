import { Text } from "@chakra-ui/react";
import React from "react";

type CombineGradientProps = {
  textGradient?: string;
  prefixText?: string;
  postfixText?: string;
};

export const CombineGradient: React.FC<CombineGradientProps> = (props) => {
  return (
    <React.Fragment>
      {props.prefixText}&nbsp;
      <Text as="span" variant="textGradient">
        {props.textGradient}
      </Text>
      &nbsp;{props.postfixText}
    </React.Fragment>
  );
};
