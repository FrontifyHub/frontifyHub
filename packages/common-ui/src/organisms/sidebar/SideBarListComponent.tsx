"use client"
import { Box, Center, Divider, Flex, Input, InputGroup, InputLeftElement, List, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import NavItem from '@frontifyHub/common-ui/molecules/NavItem';

type ChildComponentType = {
    title: string,
    href: string
}

type GroupComponentType = {
    title: string,
    child: ChildComponentType[]
} | undefined

const LIST_COMPONENT: GroupComponentType[] = [
    {
        title: "Forms",
        child: [
            { title: "Button", href: "/button" },
            { title: "Checkbox", href: "/checkbox" },
            { title: "Editable", href: "/editable" },
            { title: "Form Control", href: "/form-control" },
            { title: "Icon Button", href: "/icon-button" },
            { title: "Input", href: "/input" },
            { title: "Number Input", href: "/number-input" },
            { title: "Pin Input", href: "/pin-input" },
            { title: "Radio", href: "/radio" },
            { title: "Range Slider", href: "/range-slider" },
            { title: "Select", href: "/select" },
            { title: "Slider", href: "/slider" },
            { title: "Switch", href: "/switch" },
            { title: "Textarea", href: "/textarea" }
        ]
    },
    {
        title: "Data Display",
        child: [
            { title: "Badge", href: "/badge" },
            { title: "Card", href: "/card" },
            { title: "Code", href: "/code" },
            { title: "Divider", href: "/divider" },
            { title: "Kbd", href: "/kbd" },
            { title: "List", href: "/list" },
            { title: "Stat", href: "/stat" },
            { title: "Table", href: "/table" },
            { title: "Tag", href: "/tag" }
        ]
    }
];

export const SideBarListComponent = () => {
    const [filterValue, setFilterValue] = React.useState<string>('');

    const filterComponent = (item: GroupComponentType): GroupComponentType => {
        if (!item) return undefined;
        const lowerFilter = filterValue.toLowerCase();
        const childComponentMatchFilter = item.child.filter(c => c.title.toLowerCase().includes(lowerFilter));
        if (item.title.toLowerCase().includes(lowerFilter) || childComponentMatchFilter.length > 0) {
            return {
                ...item,
                child: childComponentMatchFilter
            };
        }
        return undefined;
    };

    return (
        <List as="aside" width="fit-content" py={12} pl={6} pr={12} borderRight="1px solid #A39FA9" h={"100vh"} overflowY={'scroll'}>
            <InputGroup borderColor={"gray"}>
                <InputLeftElement pointerEvents='none'>
                    <IoSearchSharp color="gray" />
                </InputLeftElement>
                <Input type='text' placeholder='Quick search...' color="gray" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
            </InputGroup>

            <Stack mt={8} gap={8} alignItems={'start'}>
                {
                    LIST_COMPONENT.map(item => {
                        const filteredItem = filterComponent(item);
                        if (!filteredItem) return null;
                        return (
                            <Box key={filteredItem.title}>
                                <Text color={"frontifyHub.gradientPurple"} fontWeight={"800"} fontSize={'large'}>{filteredItem.title}</Text>
                                <Box my={2} />
                                <Flex gap={4}>
                                    <Center bg={"gray"} opacity={0.3}>
                                        <Divider orientation='vertical' />
                                    </Center>
                                    <Stack gap={5} alignItems={'start'}>
                                        {
                                            filteredItem.child.map(c => <NavItem key={c.href} path={c.href} label={c.title} isSelected={false} />)
                                        }
                                    </Stack>
                                </Flex>
                            </Box>
                        );
                    })
                }
            </Stack>
        </List>
    );
};
