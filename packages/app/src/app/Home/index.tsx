"use client";

import React from "react";
import { IntroSection } from "./IntroSection";
import { SecondSection } from "./SecondSection";
import { Box } from "@chakra-ui/react";
import { EndSection } from "./EndSection";
import { ThirdSection } from "./ThirdSection";

export default function HomePage() {
  return (
    <Box
      position="relative"
      overflowY="auto"
      overscrollBehaviorY="contain"
      scrollSnapType="y mandatory"
      height="100vh"
      width="100%"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      css={{
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      <IntroSection />
      <SecondSection />
      <ThirdSection />
      <EndSection />
    </Box>
  );
}
