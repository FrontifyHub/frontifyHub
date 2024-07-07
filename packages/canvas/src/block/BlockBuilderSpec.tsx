import { SerializedSpec } from "@frontifyHub/common-type";
import {
  ISizingCategory,
  SizingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Sizing/SizingCategory";
import {
  ISpacingCategory,
  SpacingCategory,
} from "@frontifyHub/design-component/src/baseStyleCategories/Spacing/SpacingCategory";
import { IBlockBuilderSpec } from "../block/IBlock";
import { onChangeSelfStyle } from "../utils/onChangeSelfStyle";

export class BlockBuilderSpec implements IBlockBuilderSpec {
  private _size!: ISizingCategory;
  private _spacing!: ISpacingCategory;

  constructor() {
    this.size = new SizingCategory();
    this.spacing = new SpacingCategory();
  }

  public get size(): ISizingCategory {
    return this._size;
  }
  public set size(value: ISizingCategory) {
    this._size = value;
  }

  public get spacing(): ISpacingCategory {
    return this._spacing;
  }
  public set spacing(value: ISpacingCategory) {
    this._spacing = value;
  }

  public set width(value: string) {
    this.size?.setWidth(value);
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

  setWidth(value: string) {
    this.size?.setWidth(value);
    return this.size?.width.value();
  }
  setHeight(value: string) {
    this.size?.setHeight(value);
    return this.size?.height.value();
  }

  setPadding(value: string) {
    this.spacing.setPadding(value);
    return this.spacing.padding.value();
  }

  setMargin(value: string) {
    this.spacing.setMargin(value);
    return this.spacing.margin.value();
  }

  fromJSON(): SerializedSpec {
    return {};
  }

  public changeStyle(style: SerializedSpec) {
    onChangeSelfStyle(this, style);
    return this;
  }
}
