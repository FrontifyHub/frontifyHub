import { IBaseStyle } from "../../models/IBaseStyle";
import { BaseStyle } from "../base";

export type DisplayAttributes = 'block' |
    'inline-block' |
    'inline' |
    'flex' |
    'inline-flex' |
    'table' |
    'inline-table' |
    'table-caption' |
    'table-cell' |
    'table-column' |
    'table-column-group' |
    'table-footer-group' |
    'table-header-group' |
    'table-row-group' |
    'table-row' |
    'flow-root' |
    'grid' |
    'inline-grid' |
    'contents' |
    'list-item' |
    'none';

export interface IDisplay extends IBaseStyle {
    display: DisplayAttributes
}

export class Display extends BaseStyle implements IDisplay {
    private _display!: DisplayAttributes;

    constructor(){
        super();
    }
    
    stylePattern(): Record<string, string> {
        if (!this.display) throw new Error('display undifined')
        return {
            display: `${this.display}`
        }
    }

    toString(): string {
        return super.toString('display', this.stylePattern())
    }
    value(): string {
        return super.value(this.stylePattern())
    }

    public get display(): DisplayAttributes {
        return this._display;
    }
    public set display(value: DisplayAttributes) {
        this._display = value
    }
}