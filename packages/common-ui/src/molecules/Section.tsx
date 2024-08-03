import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  prevSec: React.RefObject<HTMLDivElement>;
  nextSec: React.RefObject<HTMLDivElement>;
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  showUp: boolean;
  showDown: boolean;
};

export const Section: React.FC<SectionProps> = ({
  children,
  prevSec,
  nextSec,
  scrollTo,
  showUp,
  showDown,
}) => {
  return (
    <Flex h="100%" direction="column" position="relative">
      <div>{children}</div>

      <Flex
        gap={4}
        justify="center"
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        zIndex={1000}
      >
        {showUp && (
          <Button onClick={() => scrollTo(prevSec)} bg="transparent">
            <Image src="up.svg" alt="up" />
          </Button>
        )}
        {showDown && (
          <Button onClick={() => scrollTo(nextSec)} bg="transparent">
            <Image src="down.svg" alt="down" />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
