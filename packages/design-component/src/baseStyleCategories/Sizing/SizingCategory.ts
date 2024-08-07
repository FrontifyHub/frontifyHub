import { stringValueToSizeUnit } from "../../models/baseUnit/SizeUnit";
import { Height, IHeight } from "./Height";
import { IWidth, Width } from "./Width";

export interface ISizingCategory {
    height: IHeight;
    maxHeight?: IHeight;
    minHeight?: IHeight;
    width: IWidth;
    minWidth?: IWidth;
    maxWidth?: IWidth;

    setWidth: (value: string) => this
    setHeight: (value: string) => this
    setMinWidth: (value: string) => this
    setMaxWidth: (value: string) => this
    setMinHeight: (value: string) => this
    setMaxHeight: (value: string) => this
}

export class SizingCategory implements ISizingCategory {
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
        this.width.width = stringValueToSizeUnit(value);
        return this;
    }
    setHeight(value: string): this {
        this.height.height = stringValueToSizeUnit(value);
        return this;
    }

    setMinWidth(value: string): this {
        if (!this.minWidth) {
            this.minWidth = new Width('min-width');
        }
        this.minWidth.width = stringValueToSizeUnit(value);
        return this;
    }
    setMaxWidth(value: string): this {
        if (!this.maxWidth) {
            this.maxWidth = new Width('max-width');
        }
        this.maxWidth.width = stringValueToSizeUnit(value);
        return this;
    }

    setMinHeight(value: string): this {
        if (!this.minHeight) {
            this.minHeight = new Height('min-height');
        }
        this.minHeight.height = stringValueToSizeUnit(value);
        return this;
    }
    setMaxHeight(value: string): this {
        if (!this.maxHeight) {
            this.maxHeight = new Height('max-height');
        }
        this.maxHeight.height = stringValueToSizeUnit(value);
        return this;
    }

}