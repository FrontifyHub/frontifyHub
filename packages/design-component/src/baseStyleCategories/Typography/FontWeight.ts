import { SLASH_HASH } from "../../constant/slashHash";
import { IBaseStyle } from "../../models/IBaseStyle";

export interface IFontWeight extends IBaseStyle {
  fontWeight?: number;

  setFontWeight(value: string): this;
}

export class FontWeight implements IFontWeight {
  fontWeight?: number;

  private build() {
    return this;
  }

  private builderParseValue(value: string): number {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      throw new Error(`Invalid value: ${value} is not a number.`);
    }

    if (parsedValue <= 1 || parsedValue >= 1000) {
      throw new Error(
        `Value out of range: ${value} is not between 1 and 1000.`
      );
    }

    return parsedValue;
  }

  value(): string {
    return `${this.fontWeight ?? "400"}`;
  }

  toString(): string {
    return `font-weight${SLASH_HASH}${this.value()}`;
  }
  setFontWeight(value: string): this {
    const newFontWeight = this.builderParseValue(value);
    this.fontWeight = newFontWeight;
    return this.build();
  }
}
