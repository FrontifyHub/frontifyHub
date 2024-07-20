import { IBaseStyle } from "../../models/IBaseStyle";

export enum EJustifyType {
    JUSTIFY_CONTENT = 'justifyContent',
    JUSTIFY_ITEMS = 'justifyItems',
    JUSTIFY_SELF = 'justifySelf',
}

const justifyContentAttribute = ['normal', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'] as const;
const justifyItemsAttribute = ['start', 'end', 'center', 'stretch'] as const;
const justifySelfAttribute = ['auto', 'start', 'end', 'center', 'stretch'] as const;

export type JustifyContentAttribute = typeof justifyContentAttribute[number];
export type JustifyItemsAttribute = typeof justifyItemsAttribute[number];
export type JustifySelfAttribute = typeof justifySelfAttribute[number];

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
        if (this._justify.type === EJustifyType.JUSTIFY_CONTENT && justifyContentAttribute.includes(value as JustifyContentAttribute)) {
            this._justify.attribute = value as JustifyContentAttribute;
        } else if (this._justify.type === EJustifyType.JUSTIFY_ITEMS && justifyItemsAttribute.includes(value as JustifyItemsAttribute)) {
            this._justify.attribute = value as JustifyItemsAttribute;
        } else if (this._justify.type === EJustifyType.JUSTIFY_SELF && justifySelfAttribute.includes(value as JustifySelfAttribute)) {
            this._justify.attribute = value as JustifySelfAttribute;
        } else {
            throw new Error(`Invalid justify attribute value: ${value}`);
        }
    }
}