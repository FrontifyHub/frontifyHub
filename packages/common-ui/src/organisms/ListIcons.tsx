import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextIcon } from "../molecules";

interface TextIconProps {
  name: string;
  src: string;
  text: string;
}

const ICONS: TextIconProps[] = [
  {
    name: "html",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
    text: "HTML",
  },
  {
    name: "css",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png",
    text: "CSS",
  },
  {
    name: "material",
    src: "https://static-00.iconduck.com/assets.00/material-ui-icon-512x406-fhnu85xg.png",
    text: "Material UI",
  },
  {
    name: "tailwind",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
    text: "TailwindCSS",
  },
  {
    name: "typescript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    text: "Typescript",
  },
  {
    name: "javascript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    text: "Javascript",
  },
  {
    name: "nextjs",
    src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    text: "Nextjs",
  },
  {
    name: "angular",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
    text: "Angular",
  },
  {
    name: "react",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    text: "ReactJS",
  },
];

export const ListIcons = ({ ...props }) => {
  return (
    <Flex gap="5rem" {...props}>
      {ICONS.map((item) => (
        <TextIcon key={item.name} src={item.src} text={item.text} />
      ))}
    </Flex>
  );
};
