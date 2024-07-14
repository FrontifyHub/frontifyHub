import { FontSize } from "./FontSize";

export interface ITypographyCategory {
  fontSize: FontSize;

  setFontSize(value: string): this;
}

export class TypographyCategory implements ITypographyCategory {
  fontSize: FontSize;

  constructor() {
    this.fontSize = new FontSize();
  }

  setFontSize(value: string): this {
    this.fontSize.setFontSize(value);
    return this;
  }
}
