import { DividerBuilderSpec } from "../src/builder/IDividerBuilderSpec";
import { BLOCK_DIVIDER_INITIATION } from "../src/constant/initializeBlock";

describe("Block Divider Correcly", () => {
  let blockDivider = new DividerBuilderSpec();
  const { height, width, margin, padding } = BLOCK_DIVIDER_INITIATION;
  test("check initialize", () => {
    expect(blockDivider.size.height.toString()).toBe(height);
    expect(blockDivider.size.width.toString()).toBe(width);
    expect(blockDivider.spacing.padding.toString()).toBe(padding);
    expect(blockDivider.spacing.margin.toString()).toBe(margin);
  });
});
