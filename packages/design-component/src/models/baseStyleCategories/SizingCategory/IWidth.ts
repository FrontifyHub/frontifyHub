import { IBaseStyle } from "../IBaseStyle";
import { SizeUnit } from "./ISize";

export interface IWidth extends IBaseStyle {
    width?: SizeUnit;
    type?: 'width' | 'min-width' | 'max-width'
}