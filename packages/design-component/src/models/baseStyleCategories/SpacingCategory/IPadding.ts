import { AbsoluteSize } from "../../baseUnit/AbsoluteSize";
import { RelativeSize } from "../../baseUnit/RelativeSize";

export type PaddingSize = AbsoluteSize | RelativeSize;

export interface IPadding {
  left?: PaddingSize;
  right?: PaddingSize;
  top?: PaddingSize;
  bottom?: PaddingSize;

  toString(): string;
  setPadding(value: string): this;
  setLeft(value: string): this;
  setRight(value: string): this;
  setTop(value: string): this;
  setBottom(value: string): this;

}
