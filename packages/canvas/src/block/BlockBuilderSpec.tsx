import {
  ISizingCategory,
  SizingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Sizing/SizingCategory";
import {
  ISpacingCategory,
  SpacingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Spacing/SpacingCategory";
import { BlockConfigure, IBlockBuilderSpec } from "../block/IBlock";
import { onChangeSelfStyle } from "../utils/onChangeSelfStyle";

export class BlockBuilderSpec implements IBlockBuilderSpec {
  size!: ISizingCategory;
  spacing!: ISpacingCategory;

  constructor() {
    this.size = new SizingCategory();
    this.spacing = new SpacingCategory();
  }

  public set width(value: string) {
    this.size.setWidth(value);
  }

  public set height(value: string) {
    this.size?.setHeight(value);
  }

  public set padding(value: string) {
    this.spacing.setPadding(value);
  }

  public set margin(value: string) {
    this.spacing.setMargin(value);
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

  public loadConfigure(configure: BlockConfigure): BlockBuilderSpec {
    return new BlockBuilderSpec().changeStyle(configure);
  }

  fromJSON(): IBlockBuilderSpec {
    return this.loadConfigure(this.exportConfigure());
  }

  public changeStyle(style: BlockConfigure) {
    onChangeSelfStyle(this, style);
    return this.loadConfigure(this.exportConfigure());
  }
}
