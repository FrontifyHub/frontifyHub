import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useBlockSelecting } from "../context/BlockSelectingProvider";
import styled from "@emotion/styled";
import { BlockConfigure, IBlock } from "../block/IBlock";
import { BlockToolbox } from "./BlockToolbox";

type SelectedBlockWrapperProps = {
  blockView: ReactNode;
  block: IBlock;
  onChangeStyleBlock: (styleBlock: BlockConfigure, pathBlock: string) => void;
};

const BlockWrapperStyled = styled(Box)<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected &&
    `
    border: solid 1px blue;
    padding: 4px;
  `}
  cursor: pointer;
`;

export const SelectedBlockWrapper = React.memo(
  ({ blockView, block, onChangeStyleBlock }: SelectedBlockWrapperProps) => {
    const { pathSelectedBlock, setPathSelectedBlock, onResetSelectedBlock } =
      useBlockSelecting();
    const isSelectedBlock = pathSelectedBlock === block.path;
    const ref = React.useRef<HTMLDivElement>(null);
    useOutsideClick({
      ref: ref,
      handler: () => onResetSelectedBlock(),
    });
    return (
      <Box ref={ref}>
        <Menu isOpen={isSelectedBlock} placement="bottom-end">
          <BlockWrapperStyled
            isSelected={isSelectedBlock}
            onClick={() => setPathSelectedBlock(block.path!)}
          >
            {blockView}
          </BlockWrapperStyled>
          <MenuButton />

          <MenuList>
            <BlockToolbox
              block={block}
              onChangeStyleBlock={onChangeStyleBlock}
            />
          </MenuList>
        </Menu>
      </Box>
    );
  }
);
