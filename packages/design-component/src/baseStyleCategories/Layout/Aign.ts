import { IBaseStyle } from "../../models/IBaseStyle";
import { BaseStyle } from "../base";

export enum EAlignType {
    ALIGN_CONTENT = 'alignContent',
    ALIGN_ITEMS = 'alignItems',
    ALIGN_SELF = 'alignSelf',
}

const alignContentAttribute = ['normal', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'] as const;
const alignItemsAttribute = ['start', 'end', 'center', 'stretch'] as const;
const alignSelfAttribute = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'] as const;

export type AlignContentAttribute = typeof alignContentAttribute[number];
export type AlignItemsAttribute = typeof alignItemsAttribute[number];
export type AlignSelfAttribute = typeof alignSelfAttribute[number];

export type JustifyStyle = {
    type: EAlignType.ALIGN_CONTENT,
    attribute: AlignContentAttribute
} | {
    type: EAlignType.ALIGN_ITEMS,
    attribute: AlignItemsAttribute
} | {
    type: EAlignType.ALIGN_SELF,
    attribute: AlignSelfAttribute
}

export interface IJustify extends IBaseStyle {
    justify: JustifyStyle
}

export class Justify extends BaseStyle implements IJustify {
    _justify!: JustifyStyle;

    constructor() {
        super();
    }

    stylePattern(): Record<string, string> {
        if (!this.justify) throw new Error('display undifined')
        return {
            justify: `${this.justify}`
        }
    }

    toString(): string {
        return super.toString('justify', this.stylePattern())
    }

    value(): string {
        return super.value(this.stylePattern())
    }

    public get justify(): JustifyStyle {
        return this._justify;
    }
    public set justify(value: string) {
        if (this._justify.type === EAlignType.ALIGN_CONTENT && alignContentAttribute.includes(value as AlignContentAttribute)) {
            this._justify.attribute = value as AlignContentAttribute;
        } else if (this._justify.type === EAlignType.ALIGN_ITEMS && alignItemsAttribute.includes(value as AlignItemsAttribute)) {
            this._justify.attribute = value as AlignItemsAttribute;
        } else if (this._justify.type === EAlignType.ALIGN_SELF && alignSelfAttribute.includes(value as AlignSelfAttribute)) {
            this._justify.attribute = value as AlignSelfAttribute;
        } else {
            throw new Error(`Invalid justify attribute value: ${value}`);
        }
    }
}