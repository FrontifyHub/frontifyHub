import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";

export interface IMargin extends IBaseStyle {
    left?: SizeUnit;
    right?: SizeUnit;
    top?: SizeUnit;
    bottom?: SizeUnit;

    setMargin(value: string): this;
    setLeft(value: string): this;
    setRight(value: string): this;
    setTop(value: string): this;
    setBottom(value: string): this;
}

export class Margin implements IMargin {
    left?: SizeUnit;
    right?: SizeUnit;
    top?: SizeUnit;
    bottom?: SizeUnit;

    private setAllSides(size: SizeUnit): void {
        this.left = this.right = this.top = this.bottom = size;
    }

    private build() {
        return this;
    }

    private builderParseSize(size: string): SizeUnit {
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
            throw new Error(`Invalid size format margin: ${conditionUnitSize}`);
        }
        const value = parseInt(match[1], 10);
        const unit = match[2] as SizeUnit["unit"];
        return { value, unit };
    }


    value(): string {
        return `${this.top?.value ?? "0"}${this.top?.unit} ${this.right?.value ?? "0"}${this.right?.unit} ${this.bottom?.value ?? "0"}${this.bottom?.unit} ${this.left?.value ?? "0"}${this.left?.unit}`;
    }

    toString(): string {
        return `margin${SLASH_HASH}${this.value()}`;

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

    setMargin(value: string): this {
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