import { AbsoluteSize } from "../../baseUnit/AbsoluteSize";
import { RelativeSize } from "../../baseUnit/RelativeSize";

export type SizeUnit = AbsoluteSize | RelativeSize;

export interface ISize {
    setSize(value: string): this;
}