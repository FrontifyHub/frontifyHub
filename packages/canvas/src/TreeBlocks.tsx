import React, { useId } from "react";
import { BlockSection } from "./block/BlockSection";
import { TreeBlock } from "./block/IBlock";
import { BlockItem } from "./block/BlockItem";
import { BlockSelectingProvider } from "./context/BlockSelectingProvider";
import { onChangeStyleBlock } from "./block/BlockHandler";
import { BlockConfigure } from "@frontifyHub/common-type";

export const TreeBlocks = () => {
  // MOCK DATA
  const [treeBlock, setTreeBlock] = React.useState<TreeBlock>(
    new TreeBlock({
      block: {
        id: useId(),
        blockType: "section",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
    (styleBlock: BlockConfigure, pathBlock: string) => {
      onChangeStyleBlock(styleBlock, pathBlock, setTreeBlock);
    },
    [setTreeBlock]
  );

  const block = React.useMemo(() => {
    switch (treeBlock.block.blockType) {
      case "item":
        return <BlockItem block={treeBlock.block} />;
      case "section":
        const { id, blocks, blockType, path, ...style } = treeBlock.block;
        return (
          <BlockSection
            block={treeBlock.block}
            style={style}
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
