import { SerializedSpec } from "@frontifyHub/common-type";
import { BLOCK_DIVIDER_INITIATION } from "../constant/initializeBlock";
import { BlockBuilderSpec } from "../block/BlockBuilderSpec";

export class DividerBuilderSpec extends BlockBuilderSpec {
    constructor(){
        super();
    }

    public fromJSON(): SerializedSpec {
        const { height, margin, padding, width } = BLOCK_DIVIDER_INITIATION;
        return {
            width: this.size.width.value() ?? this.setWidth(this.width ?? width),
            height: this.size.height.value() ?? this.setHeight(this.height ?? height),
            padding: this.spacing.padding.value() ?? this.setPadding(this.padding ?? padding),
            margin: this.spacing.margin.value() ?? this.setMargin(this.margin ?? margin)
        }
    } 
}