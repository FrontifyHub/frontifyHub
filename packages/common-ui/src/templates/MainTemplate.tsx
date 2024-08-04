import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { SideBar } from '../organisms/sidebar/SideBar'
import { SideBarListComponent } from '../organisms'

type MainTemplateProps = {
    children: ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <Flex>
            <SideBar />
            <SideBarListComponent />
            {children}
        </Flex>
    )
}