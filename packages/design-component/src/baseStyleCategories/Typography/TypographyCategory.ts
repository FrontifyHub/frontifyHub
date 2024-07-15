import { LineHeight } from "./LineHeight";
import { FontWeight } from "./FontWeight";
import { FontSize } from "./FontSize";
import { LetterSpacing } from "./LetterSpacing";

export interface ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;

  setFontSize(value: string): this;
  setFontWeight(value: string): this;
  setLetterSpacing(value: string): this;
  setLineHeight(value: string): this;
}

export class TypographyCategory implements ITypographyCategory {
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;

  constructor() {
    this.fontSize = new FontSize();
    this.fontWeight = new FontWeight();
    this.letterSpacing = new LetterSpacing();
    this.lineHeight = new LineHeight();
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
  setLineHeight(value: string): this {
    this.lineHeight.setLineHeight(value);
    return this;
  }
}
