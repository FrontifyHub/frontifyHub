import React from "react";
import { BlockTree as BlockTreeType } from "@frontifyHub/common-type";
import { BlockItem } from "./BlockItem";

type BlockTreeProps = {
  blockTree: BlockTreeType;
};

export const BlockTree = ({ blockTree }: BlockTreeProps) => {
  return (
    <div>
      {blockTree.block.map((block) => {
        if (block.blockType === "tree") {
          return <BlockTree blockTree={block} />;
        }
        
        return <BlockItem block={block} />;
      })}
    </div>
  );
};
