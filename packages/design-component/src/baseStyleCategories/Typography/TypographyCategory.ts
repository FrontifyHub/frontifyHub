import { FontWeight } from "./FontWeight";
import { FontSize } from "./FontSize";

export interface ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;

  setFontSize(value: string): this;
  setFontWeight(value: string): this;
}

export class TypographyCategory implements ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;

  constructor() {
    this.fontSize = new FontSize();
    this.fontWeight = new FontWeight();
  }

  setFontSize(value: string): this {
    this.fontSize.setFontSize(value);
    return this;
  }
  setFontWeight(value: string): this {
    this.fontWeight.setFontWeight(value);
    return this;
  }
}
