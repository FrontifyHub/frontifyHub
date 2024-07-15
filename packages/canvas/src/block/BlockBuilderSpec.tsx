import {
  ISizingCategory,
  SizingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Sizing/SizingCategory";
import {
  ISpacingCategory,
  SpacingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Spacing/SpacingCategory";
import { BlockConfigure, IBlockBuilderSpec } from "../block/IBlock";

export class BlockBuilderSpec implements IBlockBuilderSpec {
  size: ISizingCategory ;
  spacing: ISpacingCategory;

  constructor() {
    this.size = new SizingCategory();
    this.spacing = new SpacingCategory();
  }


  public setWidth(value?: string) {
    this.size.setWidth(value ?? "0px");
    return this;
  }

  public setHeight(value?: string) {
    this.size.setHeight(value ?? "0px");
    return this;
  }

  public setPadding(value?: string) {
    this.spacing.setPadding(value ?? "0px");
    return this;
  }

  public setMargin(value?: string) {
    this.spacing.setMargin(value ?? "0px");
    return this;
  }

  public exportConfigure(): BlockConfigure {
    const { height, minHeight, maxHeight, width, minWidth, maxWidth } =
      this.size;
    const { margin, padding } = this.spacing;
    return {
      // size
      width: width.value(),
      maxWidth: maxWidth?.value(),
      minWidth: minWidth?.value(),
      height: height.value(),
      maxHeight: maxHeight?.value(),
      minHeight: minHeight?.value(),

      // spacing
      padding: padding.value(),
      margin: margin.value(),
    };
  }

  public loadConfigure(configure: BlockConfigure) {
    const { height, width, margin, padding } = configure;
    return new BlockBuilderSpec()
      .setHeight(height)
      .setWidth(width)
      .setMargin(margin)
      .setPadding(padding);
  }

  public fromJSON(): IBlockBuilderSpec {
    return this.loadConfigure(this.exportConfigure());
  }
}
