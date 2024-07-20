import { SLASH_HASH } from "../constant/slashHash";
import { IBaseStyle } from "../models/IBaseStyle";

export class BaseStyle implements IBaseStyle {
    value(record: Record<string, string>): string {
        const { top, bottom, left, right, height, width } = record;
        if (top && right && bottom && left) {
            return `${top} ${right} ${bottom} ${left}`
        }
        if (height) {
            return `${height}`
        }
        if (width) {
            return `${width}`
        }
        throw new Error('must provide value')
    }
    toString(type: string, record: Record<string, string>): string {
        if (!type) throw new Error('must provide type')
        return `${type}${SLASH_HASH}${this.value(record)}`;
    }
}