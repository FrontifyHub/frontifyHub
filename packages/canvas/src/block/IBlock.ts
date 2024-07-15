import { SLASH_PATH_BLOCK } from "../constant/slash";
import { ISizingCategory } from "@frontifyHub/design-component/src/baseStyleCategories/Sizing/SizingCategory";
import { ISpacingCategory } from "@frontifyHub/design-component/src/baseStyleCategories/Spacing/SpacingCategory";
import { dfsSearchPathBlock } from "../utils/dfsSearchPathBlock";
import { onChangeSelfStyle } from "../utils/onChangeSelfStyle";
import { buildPathBlocks } from "./BlockHandler";

type EditingComponentType = { editingComponentType: 'divider' | 'button' }
export interface IBlockItem extends BlockConfigure, EditingComponentType {
    blockType: 'item',
    id: string,
    path?: string,
}

export interface IBlockSection extends BlockConfigure {
    blockType: 'section',
    id: string,
    path?: string,
    blocks: IBlock[]
};

export type BlockConfigure = {
    width?: string;
    maxWidth?: string;
    minWidth?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    padding?: string;
    margin?: string;
};

export interface IBlockBuilderSpec {
    size?: ISizingCategory;
    spacing?: ISpacingCategory;
    fromJSON: () => IBlockBuilderSpec;
    exportConfigure: () => BlockConfigure
    loadConfigure: (configure: BlockConfigure) => IBlockBuilderSpec
}

export type IBlock = IBlockItem | IBlockSection;



export interface ITreeBlock {
    block: IBlock
    changeLocalStyle: (style: BlockConfigure, pathBlock: string) => this
};

export class TreeBlock implements ITreeBlock {
    private _block: IBlock;

    constructor({ block }: { block: IBlock }) {
        this._block = buildPathBlocks(block, '');
    }

    public get block(): IBlock {
        return this._block;
    }
    public set block(value: IBlock) {
        this._block = buildPathBlocks(value, '');
    }

    changeLocalStyle(style: BlockConfigure, pathBlock: string) {
        const selectedBlock = dfsSearchPathBlock(this.block, pathBlock);
        onChangeSelfStyle(selectedBlock, style);
        return this;
    };
}
