import { IBaseStyle } from "../IBaseStyle";
import { SizeUnit } from "./ISize";

export interface IHeight extends IBaseStyle {
    height?: SizeUnit
    type?: 'height' | 'min-height' | 'max-height';
}