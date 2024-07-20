import React from "react";
import { BlockItem } from "./BlockItem";
import { IBlockSection } from "./IBlock";
import { SelectedBlockWrapper } from "../components/SelectedBlockWrapper";
import { Box } from "@chakra-ui/react";
import { BlockConfigure } from "@frontifyHub/common-type";

type BlockSectionProps = {
  block: IBlockSection;
  style: BlockConfigure;
  onChangeStyleBlock: (styleBlock: BlockConfigure, pathBlock: string) => void;
};

export const BlockSection = ({
  block,
  style,
  onChangeStyleBlock,
}: BlockSectionProps) => {
  console.log({ style });
  return (
    <Box style={style}>
      {block.blocks.map((block) => {
        if (block.blockType === "section") {
          const { blocks, id, blockType, path, ...style } = block;
          return (
            <SelectedBlockWrapper
              blockView={
                <BlockSection
                  style={style}
                  block={block}
                  onChangeStyleBlock={onChangeStyleBlock}
                />
              }
              onChangeStyleBlock={onChangeStyleBlock}
              block={block}
            />
          );
        }
        // single block
        return (
          <SelectedBlockWrapper
            blockView={<BlockItem block={block} />}
            block={block}
            onChangeStyleBlock={onChangeStyleBlock}
          />
        );
      })}
    </Box>
  );
};
