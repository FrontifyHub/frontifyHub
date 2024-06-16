import { SLASH_HASH } from "../../../constant/slashHash";
import { IPadding, PaddingSize } from "../../../models/baseStyleCategories/SpacingCategory/IPadding";
import { AbsoluteSizeUnit } from "../../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../../models/baseUnit/RelativeSize";
import { BaseStyle } from "../BaseStyle";

export class Padding extends BaseStyle implements IPadding  {

    left?: PaddingSize;
    right?: PaddingSize;
    top?: PaddingSize;
    bottom?: PaddingSize;

    private setAllSides(size: PaddingSize): void {
        this.left = this.right = this.top = this.bottom = size;
    }

    private build() {
        return this;
    }

    private builderParseSize(size: string): PaddingSize {
        const unitSize = []

        for (const absKey of Object.values(AbsoluteSizeUnit)) {
            unitSize.push(absKey)
        }
        for (const relativeKey of Object.values(RelativeSizeUnit)) {
            unitSize.push(relativeKey)
        }

        const conditionUnitSize = unitSize.join('|');
        const regexPattern = new RegExp(`^(\\d+)(${conditionUnitSize})$`);
        const match = size.match(regexPattern);
        if (!match) {
            throw new Error(`Invalid size format padding: ${conditionUnitSize}`);
        }
        const value = parseInt(match[1], 10);
        const unit = match[2] as PaddingSize["unit"];
        return { value, unit };
    }


    formatSize(size?: PaddingSize): string {
        if (!size) return "0";
        return `${size.value}${size.unit}`;
    }

    toString(): string {
        return `padding${SLASH_HASH}${this.formatSize(this.top)} ${this.formatSize(this.right)} ${this.formatSize(this.bottom)} ${this.formatSize(this.left)}`;

    }
    setLeft(value: string): this {
        const newPaddingLeft = this.builderParseSize(value);
        this.left = newPaddingLeft;
        return this.build();
    }

    setRight(value: string): this {
        const newPaddingRight = this.builderParseSize(value);
        this.right = newPaddingRight;
        return this.build();
    }

    setTop(value: string): this {
        const newPaddingTop = this.builderParseSize(value);
        this.top = newPaddingTop;
        return this.build();
    }

    setBottom(value: string): this {
        const newPaddingBottom = this.builderParseSize(value);
        this.bottom = newPaddingBottom;
        return this.build();
    }

    setPadding(value: string): this {
        const values = value.split(" ");
        switch (values.length) {
            case 1:
                this.setAllSides(this.builderParseSize(values[0]));
                break;
            case 2:
                this.top = this.bottom = this.builderParseSize(values[0]);
                this.left = this.right = this.builderParseSize(values[1]);
                break;
            case 3:
                this.top = this.builderParseSize(values[0]);
                this.left = this.right = this.builderParseSize(values[1]);
                this.bottom = this.builderParseSize(values[2]);
                break;
            case 4:
                this.top = this.builderParseSize(values[0]);
                this.right = this.builderParseSize(values[1]);
                this.bottom = this.builderParseSize(values[2]);
                this.left = this.builderParseSize(values[3]);
                break;
        }
        return this.build();
    }
}