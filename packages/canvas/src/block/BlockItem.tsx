import React from "react";
import { Pure2cSSWrapper } from "@frontifyHub/transformer";
import { BoxInstance } from "@frontifyHub/design-component/src/tags/BoxInstance";
import { DividerBuilderSpec } from "../builder/IDividerBuilderSpec";
import { IBlockBuilderSpec, IBlockItem } from "./IBlock";
import { Box } from "@chakra-ui/react";

type BlockItemProps = {
  block: IBlockItem;
};

export const BlockItem = ({ block }: BlockItemProps) => {
  // hard code
  const [dividerSpec, setDividerSpec] = React.useState<IBlockBuilderSpec>(
    new DividerBuilderSpec().changeStyle(block)
  );
  
  React.useEffect(() => {
    setDividerSpec(new DividerBuilderSpec().changeStyle(block));
  }, [block]);

   const item = React.useMemo(() => {
    switch (block.editingComponentType) {
      case "divider":
        return (
          <Pure2cSSWrapper
            as={BoxInstance}
            pureStyles={dividerSpec.fromJSON()}
          />
        );
      default:
        return <></>;
    }
  }, [block, dividerSpec]);

  return <Box>{item}</Box>;
};
