import { Margin } from "../../../view-models/baseStyleCategories/SpacingCategory/Margin";
import { Padding } from "../../../view-models/baseStyleCategories/SpacingCategory/Padding";

export interface ISpacingCategory {
    padding: Padding;
    margin: Margin

    setPadding(value: string): this;
    setMargin(value: string): this;

}