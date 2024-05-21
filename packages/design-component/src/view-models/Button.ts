
import { IButton } from "../models";

export class Button implements IButton {
    backgroundColor: string;
    color: string;
    borderRadius: number;
    width: number;
    height: number;

    constructor(backgroundColor: string, color: string, borderRadius: number, width: number, height: number) {
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.borderRadius = borderRadius;
        this.width = width;
        this.height = height;
    }

    changeColor(color: string): void {
        this.color = color;
    }

    changeWidth(width: number): void {
        this.width = width;
    }

    changeHeight(height: number): void {
        this.height = height;
    }

    getColor() {
        return this.color;
    }
}