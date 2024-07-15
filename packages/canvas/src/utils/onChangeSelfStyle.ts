import { SerializedSpec } from "@frontifyHub/common-type";
import { BlockConfigure } from "../block/IBlock";

export const onChangeSelfStyle = (self: Record<string, any>, style: BlockConfigure) => {
    Object.entries(style).forEach(([key, value]) => {
        self[key] = value;
    });
    return self;
};
