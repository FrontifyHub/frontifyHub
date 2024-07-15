import React from "react";
import { BlockItem } from "./BlockItem";
import { BlockConfigure, IBlockSection } from "./IBlock";
import { SelectedBlockWrapper } from "../components/SelectedBlockWrapper";
import { Box } from "@chakra-ui/react";

type BlockSectionProps = {
  block: IBlockSection;
  onChangeStyleBlock: (styleBlock: BlockConfigure, pathBlock: string) => void;
};

export const BlockSection = ({
  block,
  onChangeStyleBlock,
}: BlockSectionProps) => {
  return (
    <Box>
      {block.blocks.map((block) => {
        if (block.blockType === "section") {
          return (
            <SelectedBlockWrapper
              blockView={
                <BlockSection
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
