import { SerializedSpec } from "./type-serialized";

export type BlockItem = {
    blockType: 'item',
    block?: {}
} & {
    editingComponentType: 'divider' | 'button',
} & SerializedSpec;

export type Block = BlockItem | BlockTree;

export type BlockTree = {
    blockType: 'tree',
    block: Block[]
};

