"use client";

import React, { useRef } from "react";
import { IntroSection } from "./IntroSection";
import { SecondSection } from "./SecondSection";
import { Box } from "@chakra-ui/react";
import { EndSection } from "./EndSection";
import { ThirdSection } from "./ThirdSection";
import { Section } from "@frontifyHub/common-ui/molecules";

const sectionComponents = [
  IntroSection,
  SecondSection,
  ThirdSection,
  EndSection,
];

export default function HomePage() {
  const sectionRefs: React.RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      height="calc(100vh - 12rem)"
      width="100%"
      overflowY="scroll"
      scrollSnapType="y mandatory"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {sectionComponents.map((Component, index) => (
        <Box
          key={index}
          ref={sectionRefs[index]}
          scrollSnapAlign="center"
          h="calc(100vh - 12rem)"
          mb="6rem"
        >
          <Section
            prevSec={sectionRefs[index - 1]}
            nextSec={sectionRefs[index + 1]}
            scrollTo={scrollToSection}
            showUp={index !== 0}
            showDown={index !== sectionRefs.length - 1}
          >
            <Component />
          </Section>
        </Box>
      ))}
    </Box>
  );
}
