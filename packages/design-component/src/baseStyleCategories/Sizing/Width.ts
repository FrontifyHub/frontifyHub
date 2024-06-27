import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";
import { isBaseUnit } from "../../utils/baseUnit";

export interface IWidth extends IBaseStyle {
  width?: SizeUnit;
  type?: 'width' | 'min-width' | 'max-width'
}

export class Width implements IWidth {
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

  setSize(value: string): this {
    const matches = value.match(/^(\d+(?:\.\d+)?)([a-z%]+)$/);
    if (!matches) {
      throw new Error(`Invalid size unit: ${value}`);
    }
    const [num, unit] = matches;

    if (!isBaseUnit(unit)) {
      throw new Error(`Invalid unit: ${unit}`);
    }
    this.width = {
      value: parseFloat(num),
      unit: unit as AbsoluteSizeUnit | RelativeSizeUnit,
    };
    return this;
  }

}