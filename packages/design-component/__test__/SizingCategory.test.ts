import { SLASH_HASH } from '../src/constant/slashHash';
import { SizingCategory } from "../src/baseStyleCategories/Sizing/SizingCategory";

describe('Size Category Correctly', () => {
    let sizeCategory: SizingCategory = new SizingCategory;

    test("should set width", () => {
        let valueWidth = "100px";
        sizeCategory.setWidth(valueWidth);
        expect(sizeCategory.width.toString()).toBe(`width${SLASH_HASH}${valueWidth}`);

        valueWidth = "33em";
        sizeCategory.setWidth(valueWidth);
        expect(sizeCategory.width.toString()).toBe(`width${SLASH_HASH}${valueWidth}`);

        valueWidth = "7%";
        sizeCategory.setWidth(valueWidth);
        expect(sizeCategory.width.toString()).toBe(`width${SLASH_HASH}${valueWidth}`);
    })

    test("should set height", () => {
        let valueHeight = "100px";
        sizeCategory.setHeight(valueHeight);
        expect(sizeCategory.height.toString()).toBe(`height${SLASH_HASH}${valueHeight}`);
        valueHeight = "33em";
        sizeCategory.setHeight(valueHeight);
        expect(sizeCategory.height.toString()).toBe(`height${SLASH_HASH}${valueHeight}`);
        valueHeight = "7%";
        sizeCategory.setHeight(valueHeight);
        expect(sizeCategory.height.toString()).toBe(`height${SLASH_HASH}${valueHeight}`);
    })


    test("should set min width", () => {
        let valueMinWidth = "100px";
        sizeCategory.setMinWidth(valueMinWidth);
        expect(sizeCategory.minWidth).toHaveProperty
        if (!sizeCategory.minWidth) return;
        expect(sizeCategory.minWidth.toString()).toBe(`min-width${SLASH_HASH}${valueMinWidth}`);
        valueMinWidth = "33em";
        sizeCategory.setMinWidth(valueMinWidth);
        expect(sizeCategory.minWidth.toString()).toBe(`min-width${SLASH_HASH}${valueMinWidth}`);
        valueMinWidth = "7%";
        sizeCategory.setMinWidth(valueMinWidth);
        expect(sizeCategory.minWidth.toString()).toBe(`min-width${SLASH_HASH}${valueMinWidth}`);
    })

    test("should set max width", () => {
        let valueMaxWidth = "100px";
        sizeCategory.setMaxWidth(valueMaxWidth);
        expect(sizeCategory.maxWidth).toHaveProperty
        if (!sizeCategory.maxWidth) return;
        expect(sizeCategory.maxWidth.toString()).toBe(`max-width${SLASH_HASH}${valueMaxWidth}`);
        valueMaxWidth = "33em";
        sizeCategory.setMaxWidth(valueMaxWidth);
        expect(sizeCategory.maxWidth.toString()).toBe(`max-width${SLASH_HASH}${valueMaxWidth}`);
        valueMaxWidth = "7%";
        sizeCategory.setMaxWidth(valueMaxWidth);
        expect(sizeCategory.maxWidth.toString()).toBe(`max-width${SLASH_HASH}${valueMaxWidth}`);
    })

    test("should set min height", () => {
        let valueMinHeight = "100px";
        sizeCategory.setMinHeight(valueMinHeight);
        expect(sizeCategory.minHeight).toHaveProperty
        if (!sizeCategory.minHeight) return;
        expect(sizeCategory.minHeight.toString()).toBe(`min-height${SLASH_HASH}${valueMinHeight}`);
        valueMinHeight = "33em";
        sizeCategory.setMinHeight(valueMinHeight);
        expect(sizeCategory.minHeight.toString()).toBe(`min-height${SLASH_HASH}${valueMinHeight}`);
        valueMinHeight = "7%";
        sizeCategory.setMinHeight(valueMinHeight);
        expect(sizeCategory.minHeight.toString()).toBe(`min-height${SLASH_HASH}${valueMinHeight}`);
    })

    test("should set max height", () => {
        let valueMaxHeight = "100px";
        sizeCategory.setMaxHeight(valueMaxHeight);
        expect(sizeCategory.maxHeight).toHaveProperty
        if (!sizeCategory.maxHeight) return;
        expect(sizeCategory.maxHeight.toString()).toBe(`max-height${SLASH_HASH}${valueMaxHeight}`);
        valueMaxHeight = "33em";
        sizeCategory.setMaxHeight(valueMaxHeight);
        expect(sizeCategory.maxHeight.toString()).toBe(`max-height${SLASH_HASH}${valueMaxHeight}`);
        valueMaxHeight = "7%";
        sizeCategory.setMaxHeight(valueMaxHeight);
        expect(sizeCategory.maxHeight.toString()).toBe(`max-height${SLASH_HASH}${valueMaxHeight}`);
    })
})