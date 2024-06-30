import { AbsoluteSizeUnit } from "../models/baseUnit/AbsoluteSize"
import { RelativeSizeUnit } from "../models/baseUnit/RelativeSize"

export const isBaseUnit = (value: string) => {
    return Object.values(AbsoluteSizeUnit).includes(value as AbsoluteSizeUnit)
        || Object.values(RelativeSizeUnit).includes(value as RelativeSizeUnit);
};