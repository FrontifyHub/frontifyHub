import { isBaseUnit } from "../../utils/baseUnit";
import { AbsoluteSize, AbsoluteSizeUnit } from "./AbsoluteSize";
import { RelativeSize, RelativeSizeUnit } from "./RelativeSize";

export type SizeUnit = AbsoluteSize | RelativeSize;

export const stringValueToSizeUnit = (value: string): SizeUnit =>{
    const matches = value.match(/^(\d+)([a-zA-Z%]+)$/);
    if (!matches) {
      throw new Error(`Invalid size unit: ${value}`);
    }
    const [_, num, unit] = matches;

    if (!isBaseUnit(unit)) {
      throw new Error(`Invalid unit: ${unit}`);
    }
    return {
      value: parseFloat(num),
      unit: unit as AbsoluteSizeUnit | RelativeSizeUnit,
    };
} 