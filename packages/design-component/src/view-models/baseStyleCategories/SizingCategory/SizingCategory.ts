import { IWidth } from "../../../models";
import { ISizingCategory } from "../../../models/baseStyleCategories/SizingCategory/ISizingCategory";
import { Height } from "./Height";
import { Width } from "./Width";

export class SizeCategory implements ISizingCategory {
    width: Width;
    height: Height;
    maxHeight?: Height;
    minHeight?: Height;
    minWidth?: Width;
    maxWidth?: Width;

    constructor() {
        this.width = new Width();
        this.height = new Height();
    }

    setWidth(value: string): this {
        this.width.setSize(value);
        return this;
    }
    setHeight(value: string): this {
        this.height.setSize(value);
        return this;
    }

    setMinWidth(value: string): this {
        if (!this.minWidth) {
            this.minWidth = new Width('min-width');
        }
        this.minWidth.setSize(value);
        return this;
    }
    setMaxWidth(value: string): this {
        if (!this.maxWidth) {
            this.maxWidth = new Width('max-width');
        }
        this.maxWidth.setSize(value);
        return this;
    }

    setMinHeight(value: string): this {
        if (!this.minHeight) {
            this.minHeight = new Height('min-height');
        }
        this.minHeight.setSize(value);
        return this;
    }
    setMaxHeight(value: string): this {
        if (!this.maxHeight) {
            this.maxHeight = new Height('max-height');
        }
        this.maxHeight.setSize(value);
        return this;
    }

}