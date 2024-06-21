import { SLASH_HASH } from "../../../constant/slashHash";
import { ISize, SizeUnit } from "../../../models/baseStyleCategories/SizingCategory/ISize";
import { IWidth } from "../../../models/baseStyleCategories/SizingCategory/IWidth";
import { AbsoluteSizeUnit } from "../../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../../models/baseUnit/RelativeSize";
import { BaseStyle } from "../BaseStyle";

export class Width implements IWidth, ISize {
  width?: SizeUnit;
  type?: 'width' | 'min-width' | 'max-width' = 'width';

  constructor(type?: 'width' | 'min-width' | 'max-width') {
    if (type) {
      this.type = type;
    }
  }

  value(): string {
    if (!this.width) return ''
    return `${this.width.value}${this.width.unit}`;
  }

  toString(): string {
    return `${this.type}${SLASH_HASH}${this.value()}`
  }

  private getUnitType(unit: string): AbsoluteSizeUnit.PX | RelativeSizeUnit {
    switch (unit) {
      case 'px':
        return AbsoluteSizeUnit.PX;
      case '%':
        return RelativeSizeUnit.PERCENT;
      case 'em':
        return RelativeSizeUnit.EM;
      case 'em':
        return RelativeSizeUnit.REM;
      case 'vh':
        return RelativeSizeUnit.VH;
      case 'vw':
        return RelativeSizeUnit.VW;
      default:
        throw new Error(`Invalid unit: ${unit}`);
    }
  }

  setSize(value: string): this {

    const matches = value.match(/^(\d+(?:\.\d+)?)([a-z%]+)$/);
    if (!matches) {
      throw new Error(`Invalid size unit: ${value}`);
    }
    const [, num, unit] = matches;
    this.width = {
      value: parseFloat(num),
      unit: this.getUnitType(unit),
    };
    return this;
  }

}