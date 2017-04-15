import {CDrawingArea} from "./CDrawingArea";
import {IShape} from "./IShape";

export abstract class CShape implements IShape {
    private fillColor: string;
    private outlineColor: string;
    private outlineThickness: number;

    constructor(fillColor: string, outlineColor: string, outlineThickness: number) {
        this.fillColor = fillColor;
        this.outlineColor = outlineColor;
        this.outlineThickness = outlineThickness;
    }

    public getFillColor(): string {
        return this.fillColor;
    }
    public getOutlineColor(): string {
        return this.outlineColor;
    }
    public getOutlineThickness(): number {
        return this.outlineThickness;
    }
    public abstract getPerimeter(): number;
    public abstract getAreaSize(): number;

    public setFillColor(color: string): void {
        this.fillColor = color;
    }
    public setOutlineColor(color: string): void {
        this.outlineColor = color;
    }
    public setOutlineThickness(outlineThickness: number): void {
        this.outlineThickness = outlineThickness;
    }

    public abstract draw(drawingArea: CDrawingArea): void;
}
