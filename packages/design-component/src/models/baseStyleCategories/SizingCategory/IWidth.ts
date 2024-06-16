import { SizeUnit } from "./ISize";

export interface IWidth {
    width?: SizeUnit;
    type?: 'width' | 'min-width' | 'max-width'
}