import { BlockConfigure } from "@frontifyHub/common-type";

export const onChangeSelfStyle = (self: Record<string, any>, style: BlockConfigure) => {
    Object.entries(style).forEach(([key, value]) => {
        self[key] = value;
    });
    return self;
};
