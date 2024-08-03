import { As, PropsOf } from "@chakra-ui/system";
import { BlockConfigure } from "@frontifyHub/common-type";
import React from "react";

export type Pure2cSSWrapperProps = {
    pureStyles: BlockConfigure;
};

type MarkEncodingWrapperProps<T extends As> = Pure2cSSWrapperProps & PropsOf<T> & {
    as: As;
};

// HOC
export function Pure2cSSWrapper<T extends As>(props: MarkEncodingWrapperProps<T>) {
    const { as: Component, pureStyles, ...rest } = props;
    const serializeStyles: Record<string, any> = {};

    Object.entries(pureStyles).forEach(([key,value]) => {
        serializeStyles[key] = value ;
    });
    // temporary static set background color divider
    serializeStyles.backgroundColor ="red"
    
    return <Component { ...rest } style={serializeStyles}/>
}
