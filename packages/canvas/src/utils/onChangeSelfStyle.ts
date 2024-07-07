import { SerializedSpec } from "@frontifyHub/common-type";

export const onChangeSelfStyle = (self: Record<string, any>, style: SerializedSpec) => {
    Object.entries(style).forEach(([key, value]) => {
        console.log({value})
        self[key] = value;
    });
    return self;
};
