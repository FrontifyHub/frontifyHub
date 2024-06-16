import { IHeight } from "./IHeight";
import { IWidth } from "./IWidth";

export interface ISizingCategory{
    height: IHeight;
    maxHeight?: IHeight;
    minHeight?: IHeight;
    width: IWidth;
    minWidth?: IWidth;
    maxWidth?: IWidth;

    setWidth(value: string): this;
    setHeight(value: string): this;
    
    setMinWidth(value: string): this;
    setMaxWidth(value: string): this;

    setMinHeight(value: string): this;
    setMaxHeight(value: string): this;
}