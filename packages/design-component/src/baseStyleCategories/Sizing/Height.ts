import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";
import { isBaseUnit } from "../../utils/baseUnit";

export interface IHeight extends IBaseStyle {
    height?: SizeUnit
    type?: 'height' | 'min-height' | 'max-height';
}

export class Height implements IHeight {
    height?: SizeUnit;
    type?: 'height' | 'min-height' | 'max-height' = 'height';

    constructor(type?: 'height' | 'min-height' | 'max-height') {
        if (type) {
            this.type = type;
        }
    }
    setSize(value: string): this {
        const regex = /(\d+(?:\.\d+)?)(px|em|rem|vh|vw|%)/;
        const match = value.match(regex);
        if (match) {
            const sizeValue = parseFloat(match[1]);
            const unit = match[2];

            if (!isBaseUnit(unit)) {
                throw new Error(`Invalid unit: ${unit}`);
            }
            this.height = {
                value: sizeValue,
                unit: unit as AbsoluteSizeUnit | RelativeSizeUnit
            }
        }
        return this;
    }

    value(): string {
        if (!this.height) return '';
        return `${this.height.value}${this.height.unit}`;
    }

    toString(): string {
        return `${this.type}${SLASH_HASH}${this.value()}`
    }
}