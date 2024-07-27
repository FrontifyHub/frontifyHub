import { Box, List, ListItem } from '@chakra-ui/react';
import React from 'react'

interface LanguageOptionsProps {
    isVisible: boolean;
}

const LanguageOptions: React.FC<LanguageOptionsProps> = ({isVisible}) =>{
    if(!isVisible) {
        return null;
    }

    return (
        <Box
            position="absolute"
            left="105px"
            top="530px"
            bg="#FFFFFF"
            border="1px solid #A39FA9"
            borderRadius="5px"
            textAlign="center"
            color="#0000000"
            fontSize="14px"
            >
            <List spacing={2} p={2}>
                <ListItem cursor="pointer" _hover={{textDecoration: 'underline'}}> English </ListItem>
                <ListItem cursor="pointer" _hover={{textDecoration: 'underline'}}> Spanish </ListItem>
                <ListItem cursor="pointer" _hover={{textDecoration: 'underline'}}> Chinese </ListItem>
            </List>
        </Box>
    )
}

export default LanguageOptions;
