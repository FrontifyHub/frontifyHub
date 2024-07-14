import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";
import { AbsoluteSizeUnit } from "../../models/baseUnit/AbsoluteSize";
import { RelativeSizeUnit } from "../../models/baseUnit/RelativeSize";
import { SizeUnit } from "../../models/baseUnit/SizeUnit";

export interface ILetterSpacing extends IBaseStyle {
  letterSpacing?: SizeUnit;

  setLetterSpacing(value: string): this;
}

export class LetterSpacing implements ILetterSpacing {
  letterSpacing?: SizeUnit;

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
    return `${this.letterSpacing?.value ?? "0"}${this.letterSpacing?.unit}`;
  }

  toString(): string {
    return `letter-spacing${SLASH_HASH}${this.value()}`;
  }
  setLetterSpacing(value: string): this {
    const newLetterSpacing = this.builderParseSize(value);
    this.letterSpacing = newLetterSpacing;
    return this.build();
  }
}
