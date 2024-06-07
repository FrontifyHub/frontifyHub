import { IHeight } from "../../../models";
import { ISize, SizeUnit } from "../../../models/baseStyleCategories/SizingCategory/ISize";
import { IWidth } from "../../../models/baseStyleCategories/SizingCategory/IWidth";
import { AbsoluteSizeUnit } from "../../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../../models/baseUnit/RelativeSize";
import { BaseStyle } from "../BaseStyle";

export class Height extends BaseStyle implements IHeight, ISize {
    height?: SizeUnit;

    setSize(value: string): this {
        const regex = /(\d+(?:\.\d+)?)(px|em|rem|vh|vw|%)/;
        const match = value.match(regex);
        if (match) {
            const sizeValue = parseFloat(match[1]);
            const unit = match[2];
            let sizeUnit: string;

            switch (unit) {
                case 'px':
                    sizeUnit = AbsoluteSizeUnit.PX;
                    break;
                case '%':
                    sizeUnit = RelativeSizeUnit.PERCENT;
                    break;
                case 'em':
                    sizeUnit = RelativeSizeUnit.EM;
                    break;
                case 'em':
                    sizeUnit = RelativeSizeUnit.REM;
                    break;
                case 'vh':
                    sizeUnit = RelativeSizeUnit.VH;
                    break;
                case 'vw':
                    sizeUnit = RelativeSizeUnit.VW;
                    break;
                default:
                    throw new Error(`Invalid unit: ${unit}`);
            }

            if (sizeUnit === AbsoluteSizeUnit.PX) {
                this.height = { value: sizeValue, unit: sizeUnit };
            } else {
                this.height = { value: sizeValue, unit: sizeUnit as RelativeSizeUnit };
            }
        }
        return this;
    }

    formatSize(size?: SizeUnit): string {
        if (!size) return '';
        return `${size.value}${size.unit}`;
    }

    toString(): string {
        return `height::${this.formatSize(this.height)};`
    }
}