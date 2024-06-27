import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextIcon } from "../molecules";

interface TextIconProps {
  src: string;
  text: string;
}

const ICONS: TextIconProps[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    text: "HTML",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    text: "CSS",
  },
  {
    src: "https://svgmix.com/uploads/5b99f5-material-ui.svg",
    text: "Material UI",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    text: "TailwindCSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    text: "Typescript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    text: "Javascript",
  },
  {
    src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    text: "Nextjs",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    text: "Angular",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    text: "ReactJS",
  },
];

export const ListIcons = ({ ...props }) => {
  return (
    <Flex gap="5rem" {...props}>
      {ICONS.map((item, key) => (
        <TextIcon key={key} src={item.src} text={item.text} />
      ))}
    </Flex>
  );
};
