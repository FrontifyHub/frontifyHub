import { BlockConfigure } from "@frontifyHub/common-type";
import { SLASH_PATH_BLOCK } from "../constant/slash";
import { IBlock, TreeBlock } from "./IBlock";

export const buildPathBlocks = (block: IBlock, parentPath: string): IBlock => {
  const path = parentPath
    ? parentPath.concat(SLASH_PATH_BLOCK, block.id)
    : block.id;
  if (block.blockType === "item") {
    return {
      ...block,
      path,
    };
  }

  return {
    ...block,
    path,
    blocks: block.blocks.map((block) => buildPathBlocks(block, path)),
  };
};

export const onChangeStyleBlock = (
  styleBlock: BlockConfigure,
  pathBlock: string,
  setTreeBlock: React.Dispatch<React.SetStateAction<TreeBlock>>
) => {
  setTreeBlock((prevTreeBlock) => {
    const updatedTreeBlock = new TreeBlock({ block: prevTreeBlock.block });
    updatedTreeBlock.changeLocalStyle(styleBlock, pathBlock);
    return updatedTreeBlock;
  });
};
