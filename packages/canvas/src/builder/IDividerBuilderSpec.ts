import { BLOCK_DIVIDER_INITIATION } from "../constant/initializeBlock";
import { BlockBuilderSpec } from "../block/BlockBuilderSpec";
import { IBlockBuilderSpec } from "../block/IBlock";

export class DividerBuilderSpec extends BlockBuilderSpec {
    constructor() {
        super();
    }

    override fromJSON(): IBlockBuilderSpec {
        const { height, margin, padding, width } = BLOCK_DIVIDER_INITIATION;
        return this.loadConfigure({
            width: this.size.width.value() ?? width,
            height: this.size.height.value() ?? height,
            padding: this.spacing.padding.value() ?? padding,
            margin: this.spacing.margin.value() ?? margin,
        });
    }
}