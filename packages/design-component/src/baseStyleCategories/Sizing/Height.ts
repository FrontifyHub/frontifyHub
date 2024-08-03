import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";
import { isBaseUnit } from "../../utils/baseUnit";
import { BaseStyle } from "../base";

export interface IHeight extends IBaseStyle {
    height?: SizeUnit
    type?: 'height' | 'min-height' | 'max-height';
}

export class Height extends BaseStyle implements IHeight {
    _height?: SizeUnit;
    type?: 'height' | 'min-height' | 'max-height' = 'height';

    constructor(type?: 'height' | 'min-height' | 'max-height') {
        super();
        if (type) {
            this.type = type;
        }
    }

    stylePattern(): Record<string, string> {
        if (!this.height) throw new Error('height undifined')
        return {
            height: `${this.height.value}${this.height.unit}`
        }
    }

    value(): string {
        return super.value(this.stylePattern())
    }

    toString(): string {
        if (!this?.type) throw new Error('type must be provided')
        return super.toString(this.type, this.stylePattern())
    }
    
    public get height(): SizeUnit | undefined {
        return this._height;
    }
    public set height(value: SizeUnit) {
        this._height = value
    }
}