import { IBaseStyle } from "../../models/IBaseStyle";

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

export class Display implements IDisplay {
    private _display!: DisplayAttributes;

    constructor(){
    }
    
    toString(): string {
        throw new Error("Method not implemented.");
    }
    value(): string {
        throw new Error("Method not implemented.");
    }

    public get display(): DisplayAttributes {
        return this._display;
    }
    public set display(value: DisplayAttributes) {
        this._display = value
    }
}