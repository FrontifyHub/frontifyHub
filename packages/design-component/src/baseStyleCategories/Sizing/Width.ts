import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";
import { BaseStyle } from "../base";

export interface IWidth extends IBaseStyle {
  width?: SizeUnit;
}

export class Width extends BaseStyle implements IWidth {
  _width?: SizeUnit;
  type?: 'width' | 'min-width' | 'max-width' = 'width';

  constructor(type?: 'width' | 'min-width' | 'max-width') {
    super();
    if (type) {
      this.type = type;
    }
  }

  stylePattern(): Record<string, string> {
    if (!this.width) throw new Error('width undifined')
    return {
      width: `${this.width.value}${this.width.unit}`
    }
  }

  value(): string {
    return super.value(this.stylePattern())
  }

  toString(): string {
    if (!this?.type) throw new Error('type must be provided')
    return super.toString(this.type, this.stylePattern())
  }

  public get width(): SizeUnit | undefined {
    return this._width;
  }
  public set width(value: SizeUnit) {
    this._width = value
  }
}