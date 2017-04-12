import {CDrawingArea} from "./CDrawingArea";

const STANDART_FILL_COLOR: string = "#3498DB";
const STANDART_OUTLINE_COLOR: string = "#2C3E50";
const STANDART_OUTLINE_THICKNESS: number = 10;

export abstract class CShape {
    private fillColor: string = STANDART_FILL_COLOR;
    private outlineColor: string = STANDART_OUTLINE_COLOR;
    private outlineThickness: number = STANDART_OUTLINE_THICKNESS;

    public setFillColor(color: string): void {
        this.fillColor = color;
    }

    public setOutlineColor(color: string): void {
        this.outlineColor = color;
    }

    public setOutlineThickness(outlineThickness: number): void {
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

    public abstract draw(drawingArea: CDrawingArea): void;
}
