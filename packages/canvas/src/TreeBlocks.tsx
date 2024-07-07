import React, { useId } from "react";
import { BlockSection } from "./block/BlockSection";
import { TreeBlock } from "./block/IBlock";
import { BlockItem } from "./block/BlockItem";
import { BlockSelectingProvider } from "./context/BlockSelectingProvider";
import { SerializedSpec } from "@frontifyHub/common-type";
import { onChangeStyleBlock } from "./block/BlockHandler";

export const TreeBlocks = () => {
  // MOCK DATA
  const [treeBlock, setTreeBlock] = React.useState<TreeBlock>(
    new TreeBlock({
      block: {
        id: useId(),
        blockType: "section",
        blocks: [
          {
            id: useId(),
            blockType: "item",
            editingComponentType: "divider",
            height: "100px",
            width: "5px",
            margin: "2px",
            padding: "1px",
          },
        ],
      },
    })
  );

  const onChangeStyle = React.useCallback(
    (styleBlock: SerializedSpec, pathBlock: string) => {
      onChangeStyleBlock(styleBlock, pathBlock, setTreeBlock);
    },
    [setTreeBlock]
  );

  const block = React.useMemo(() => {
    switch (treeBlock.block.blockType) {
      case "item":
        return <BlockItem block={treeBlock.block} />;
      case "section":
        return (
          <BlockSection
            block={treeBlock.block}
            onChangeStyleBlock={onChangeStyle}
          />
        );
      default:
        return null;
    }
  }, [treeBlock]);

  return (
    <BlockSelectingProvider treeBlock={treeBlock}>
      {block}
    </BlockSelectingProvider>
  );
};
