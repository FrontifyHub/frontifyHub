import { error } from "console";
import { IBlock } from "../block/IBlock";
import { SLASH_PATH_BLOCK } from "../constant/slash";

export const dfsSearchPathBlock = (block: IBlock, pathBlock: string): IBlock => {
    const pathSegments = pathBlock.split(SLASH_PATH_BLOCK);
    if (!pathSegments[0] || (block.id === pathBlock && pathBlock === pathSegments[0])) {
        return block;
    }

    if (pathSegments.length ===1 || block.blockType ==='item') {
        throw new Error(`Not found path: ${pathBlock} in path ${block.path}`);
    }
    for (const blockItem of block.blocks) {
        if (blockItem.id === pathSegments[1]) {
            pathSegments.shift(); // Remove the first segment
            return dfsSearchPathBlock(blockItem, pathSegments.join(SLASH_PATH_BLOCK));
        }
    }
    throw new Error(`Not found path: ${pathBlock} in path ${block.path}`);
};
