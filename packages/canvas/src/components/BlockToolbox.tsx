import React from "react";
import { IBlock } from "../block/IBlock";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { SerializedSpec } from "@frontifyHub/common-type";

type BlockToolboxProps = {
  block: IBlock;
  onChangeStyleBlock: (styleBlock: SerializedSpec, pathBlock: string) => void;
};

export const BlockToolbox = React.memo(
  ({ block, onChangeStyleBlock }: BlockToolboxProps) => {
    const { width, height, padding, margin } = block;

    return (
      <div>
        {Object.entries({ width, height, padding, margin }).map(
          ([key, value], index) => {
            return (
              <Box key={index} my={5}>
                <HStack justifyContent={"space-between"}>
                  <Button
                    onClick={() => {
                      if (!value) return;
                      const match = value.match(/^(\d+)(\D+)$/);

                      onChangeStyleBlock(
                        {
                          ...block,
                          [key]: match?.[1]
                            ? (Number(match[1]) - 1).toString() + match[2]
                            : "0px",
                        },
                        block.path ?? ""
                      );
                    }}
                  >
                    giảm
                  </Button>
                  <VStack>
                    <strong>{key}</strong>
                    <Text>{value}</Text>
                  </VStack>
                  <Button
                    onClick={() => {
                      if (!value) return;
                      const match = value.match(/^(\d+)(\D+)$/);
                      onChangeStyleBlock(
                        {
                          ...block,
                          [key]: match?.[1]
                            ? (Number(match[1]) + 1).toString() + match[2]
                            : "0px",
                        },
                        block.path ?? ""
                      );
                    }}
                  >
                    Tăng
                  </Button>
                </HStack>
              </Box>
            );
          }
        )}
      </div>
    );
  }
);
