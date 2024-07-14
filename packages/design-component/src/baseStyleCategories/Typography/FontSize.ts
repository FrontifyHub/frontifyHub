import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";

export interface IFontSize extends IBaseStyle {
  fontSize?: SizeUnit;

  setFontSize(value: string): this;
}

export class FontSize implements IFontSize {
  fontSize?: SizeUnit;

  private build() {
    return this;
  }

  private builderParseSize(size: string): SizeUnit {
    const unitSize = [];

    for (const absKey of Object.values(AbsoluteSizeUnit)) {
      unitSize.push(absKey);
    }
    for (const relativeKey of Object.values(RelativeSizeUnit)) {
      unitSize.push(relativeKey);
    }

    const conditionUnitSize = unitSize.join("|");
    const regexPattern = new RegExp(`^(\\d+)(${conditionUnitSize})$`);
    const match = size.match(regexPattern);
    if (!match) {
      throw new Error(`Invalid size format padding: ${conditionUnitSize}`);
    }
    const value = parseInt(match[1], 10);
    const unit = match[2] as SizeUnit["unit"];
    return { value, unit };
  }

  value(): string {
    return `${this.fontSize?.value ?? "0"}${this.fontSize?.unit}`;
  }

  toString(): string {
    return `font-size${SLASH_HASH}${this.value()}`;
  }
  setFontSize(value: string): this {
    const newFontSize = this.builderParseSize(value);
    this.fontSize = newFontSize;
    return this.build();
  }
}
