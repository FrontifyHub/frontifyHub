import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";

export interface ILineHeight extends IBaseStyle {
  lineHeight?: SizeUnit;

  setLineHeight(value: string): this;
}

export class LineHeight implements ILineHeight {
  lineHeight?: SizeUnit;

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
      throw new Error(
        `Invalid size format letter spacing: ${conditionUnitSize}`
      );
    }
    const value = parseInt(match[1], 10);
    const unit = match[2] as SizeUnit["unit"];
    return { value, unit };
  }

  value(): string {
    return `${this.lineHeight?.value ?? "0"}${this.lineHeight?.unit}`;
  }

  toString(): string {
    return `letter-spacing${SLASH_HASH}${this.value()}`;
  }
  setLineHeight(value: string): this {
    const newLineHeight = this.builderParseSize(value);
    this.lineHeight = newLineHeight;
    return this.build();
  }
}
