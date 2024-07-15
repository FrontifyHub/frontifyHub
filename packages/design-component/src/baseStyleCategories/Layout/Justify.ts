import { IBaseStyle } from "../../models/IBaseStyle";

export enum EJustifyType {
    JUSTIFY_CONTENT = 'justifyContent',
    JUSTIFY_ITEMS = 'justifyItems',
    JUSTIFY_SELF = 'justifySelf',
}

export type JustifyContentAttribute = 'normal' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
export type JustifyItemsAttribute = 'start' | 'end' | 'center' | 'stretch';
export type JustifySelfAttribute = 'auto' | 'start' | 'end' | 'center' | 'stretch';

export type JustifyStyle = {
    type: EJustifyType.JUSTIFY_CONTENT,
    attribute: JustifyContentAttribute
} | {
    type: EJustifyType.JUSTIFY_ITEMS,
    attribute: JustifyItemsAttribute
} | {
    type: EJustifyType.JUSTIFY_SELF,
    attribute: JustifySelfAttribute
}

export interface IJustify extends IBaseStyle {
    justify: JustifyStyle
}

export class Justify implements IJustify {
    _justify!: JustifyStyle;

    constructor() {

    }

    toString(): string {
        throw new Error("Method not implemented.");
    }
    value(): string {
        throw new Error("Method not implemented.");
    }
    public get justify(): JustifyStyle {
        return this._justify;
    }
    public set justify(value: string) {
        const justifyContentAttributes: JustifyContentAttribute[] = ['normal', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'];
        const justifyItemsAttributes: JustifyItemsAttribute[] = ['start', 'end', 'center', 'stretch'];
        const justifySelfAttributes: JustifySelfAttribute[] = ['auto', 'start', 'end', 'center', 'stretch'];

        if (this._justify.type === EJustifyType.JUSTIFY_CONTENT && justifyContentAttributes.includes(value as JustifyContentAttribute)) {
            this._justify.attribute = value as JustifyContentAttribute;
        } else if (this._justify.type === EJustifyType.JUSTIFY_ITEMS && justifyItemsAttributes.includes(value as JustifyItemsAttribute)) {
            this._justify.attribute = value as JustifyItemsAttribute;
        } else if (this._justify.type === EJustifyType.JUSTIFY_SELF && justifySelfAttributes.includes(value as JustifySelfAttribute)) {
            this._justify.attribute = value as JustifySelfAttribute;
        } else {
            throw new Error(`Invalid justify attribute value: ${value}`);
        }
    }
}