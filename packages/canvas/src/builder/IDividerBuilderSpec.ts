import { SerializedSpec } from "@frontifyHub/common-type";
import { ISizingCategory, SizingCategory } from "@frontifyHub/design-component/src/baseStyleCategories/Sizing/SizingCategory";
import { ISpacingCategory, SpacingCategory } from "@frontifyHub/design-component/src/baseStyleCategories/Spacing/SpacingCategory";

export interface IDividerBuilderSpec {
    size?: ISizingCategory;
    spacing?: ISpacingCategory;
    fromJSON: () => SerializedSpec;
}

export class DividerBuilderSpec implements IDividerBuilderSpec {
    size: ISizingCategory;
    spacing: ISpacingCategory;

    constructor() {
        this.size = new SizingCategory();
        this.spacing = new SpacingCategory();
    }

    setWidth(value: string) {
        this.size?.setWidth(value);
        return this.size?.width.value();
    }
    setHeight(value: string) {
        this.size?.setHeight(value);
        return this.size?.height.value();
    }

    setPadding(value: string) {
        this.spacing.setPadding(value);
        return this.spacing.padding.value();
    }

    setMargin(value: string) {
        this.spacing.setMargin(value);
        return this.spacing.margin.value();
    }

    public fromJSON(): SerializedSpec {
        return {
            width: this.setWidth("1px"),
            height: this.setHeight("300px"),
            padding: this.setPadding("2px"),
            margin: this.setMargin("5px")
        }
    }

}