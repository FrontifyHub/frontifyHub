import React from "react";
import { Pure2cSSWrapper } from "@frontifyHub/transformer";
import { BoxInstance } from "@frontifyHub/design-component/src/tags/BoxInstance";
import {
  DividerBuilderSpec,
  IDividerBuilderSpec,
} from "../builder/IDividerBuilderSpec";
import { BlockItem as BlockItemType } from "@frontifyHub/common-type";

type BlockItemProps = {
  block: BlockItemType;
};

export const BlockItem = ({ block }: BlockItemProps) => {
  const [dividerSpec, setDividerSpec] = React.useState<IDividerBuilderSpec>(
    new DividerBuilderSpec()
  );
  console.log({dividerSpec})
  const type = "divider";
  switch (type) {
    case "divider":
      return (
        <Pure2cSSWrapper as={BoxInstance} pureStyles={dividerSpec.fromJSON()} />
      );
    default:
      return <></>;
  }
};
