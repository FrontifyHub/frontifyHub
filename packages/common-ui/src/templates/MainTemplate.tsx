import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { SideBar } from '../organisms/sidebar/SideBar'

type MainTemplateProps = {
    children: ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <Flex>
            <SideBar />
            {children}
        </Flex>
    )
}