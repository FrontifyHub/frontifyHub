import React from "react";
import { Height } from "@frontifyHub/design-component";
import { BlockTree as BlockTreeType } from "@frontifyHub/common-type";
import { BlockTree } from "./block/BlockTree";

export const Canvas = () => {
  // mock data blocks
  const block: BlockTreeType = {
    blockType: "tree",
    block: [
      {
        blockType: "item",
        editingComponentType: "divider",
        height: "10px",
        width: "2px",
        margin: "2px",
        padding: "1px",
      },
    ],
  };

  return (
    <div>
      <BlockTree blockTree={block} />
    </div>
  );
};