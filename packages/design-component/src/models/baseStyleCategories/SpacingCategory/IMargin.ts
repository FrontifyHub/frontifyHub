import { BaseStyle } from "../../../view-models/baseStyleCategories/BaseStyle";
import { AbsoluteSize } from "../../baseUnit/AbsoluteSize";
import { RelativeSize } from "../../baseUnit/RelativeSize";

export type MarginSize = AbsoluteSize | RelativeSize;

export interface IMargin extends BaseStyle {
  left?: MarginSize;
  right?: MarginSize;
  top?: MarginSize;
  bottom?: MarginSize;

  setMargin(value: string): this;
  setLeft(value: string): this;
  setRight(value: string): this;
  setTop(value: string): this;
  setBottom(value: string): this;

}
