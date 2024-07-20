import { SLASH_HASH } from "../constant/slashHash";

type SerializeValuePattern = {
    type: 'padding',
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

export type SerializeValuePatternResponse = {
    value: string,
    toString: string
}

export const serializeValuePattern = (props: SerializeValuePattern): SerializeValuePatternResponse => {
    const { type, top, bottom, left, right } = props;
    let value;
    if (top && bottom && left && right) {
        value = `${top} ${right} ${bottom} ${left}`
    }

    if (!value) {
        throw new Error('must provide value')
    }

    return {
        value,
        toString: `${type}${SLASH_HASH}${value}`
    }
}