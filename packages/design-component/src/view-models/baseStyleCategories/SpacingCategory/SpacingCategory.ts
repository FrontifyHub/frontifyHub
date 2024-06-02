import { ISpacingCategory } from "../../../models/baseStyleCategories/SpacingCategory/ISpacingCategory";
import { Margin } from "./Margin";
import { Padding } from "./Padding";

export class SpacingCategory implements ISpacingCategory {
    padding: Padding;
    margin: Margin;

    constructor() {
        this.padding = new Padding();
        this.margin = new Margin();
    }

    setMargin(value: string): this {
        this.margin.setMargin(value);
        return this;
    }

    setPadding(value: string): this {
        this.padding.setPadding(value);
        return this;
    }
}