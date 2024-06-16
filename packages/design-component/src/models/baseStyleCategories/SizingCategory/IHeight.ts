import { SizeUnit } from "./ISize";

export interface IHeight {
    height?: SizeUnit
    type?: 'height' | 'min-height' | 'max-height';
}