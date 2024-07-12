import { BLOCK_DIVIDER_INITIATION } from "../constant/initializeBlock";
import { BlockBuilderSpec } from "../block/BlockBuilderSpec";

export class DividerBuilderSpec extends BlockBuilderSpec {
    constructor() {
        super();
    }

    override fromJSON(): BlockBuilderSpec {
        const { height, margin, padding, width } = BLOCK_DIVIDER_INITIATION;
        this.width = (this.width ?? width);
        this.height = (this.height ?? height);
        this.padding = (this.padding ?? padding);
        this.margin = (this.margin ?? margin)
        return this.loadConfigure(this.exportConfigure());
    }
}