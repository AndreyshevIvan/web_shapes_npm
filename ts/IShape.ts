import {CDrawingArea} from "./CDrawingArea";

export interface IShape {
    getFillColor(): string;
    getOutlineColor(): string;
    getOutlineThickness(): number;
    getPerimeter(): number;
    getAreaSize(): number;

    setFillColor(color: string): void;
    setOutlineColor(outlineColor: string): void;
    setOutlineThickness(thickness: number): void;

    draw(drawingArea: CDrawingArea): void;
}
