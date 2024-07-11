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
    _height?: SizeUnit;
    type?: 'height' | 'min-height' | 'max-height' = 'height';

    constructor(type?: 'height' | 'min-height' | 'max-height') {
        if (type) {
            this.type = type;
        }
    }

    value(): string {
        if (!this.height) return '';
        return `${this.height.value}${this.height.unit}`;
    }

    toString(): string {
        return `${this.type}${SLASH_HASH}${this.value()}`
    }
    public get height(): SizeUnit | undefined {
        return this._height;
    }
    public set height(value: SizeUnit) {
        this._height = value
    }
}