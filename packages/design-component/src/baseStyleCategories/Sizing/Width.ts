import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";
import { isBaseUnit } from "../../utils/baseUnit";

export interface IWidth extends IBaseStyle {
  width?: SizeUnit;
}

export class Width implements IWidth {
  _width?: SizeUnit;
  type?: 'width' | 'min-width' | 'max-width' = 'width';

  constructor(type?: 'width' | 'min-width' | 'max-width') {
    if (type) {
      this.type = type;
    }
  }

  value(): string {
    if (!this._width) return ''
    return `${this._width.value}${this._width.unit}`;
  }

  toString(): string {
    return `${this.type}${SLASH_HASH}${this.value()}`
  }

  public get width(): SizeUnit | undefined{
    return this._width;
  }
  public set width(value: SizeUnit) {
    this._width = value
  }
}