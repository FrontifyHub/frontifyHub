import { FontWeight } from "./FontWeight";
import { FontSize } from "./FontSize";
import { LetterSpacing } from "./LetterSpacing";

export interface ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;

  setFontSize(value: string): this;
  setFontWeight(value: string): this;
  setLetterSpacing(value: string): this;
}

export class TypographyCategory implements ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;

  constructor() {
    this.fontSize = new FontSize();
    this.fontWeight = new FontWeight();
    this.letterSpacing = new LetterSpacing();
  }

  setFontSize(value: string): this {
    this.fontSize.setFontSize(value);
    return this;
  }
  setFontWeight(value: string): this {
    this.fontWeight.setFontWeight(value);
    return this;
  }
  setLetterSpacing(value: string): this {
    this.letterSpacing.setLetterSpacing(value);
    return this;
  }
}
