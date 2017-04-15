import {CDrawingArea} from "./CDrawingArea";
import {CPoint} from "./CPoint";
import {CShape} from "./CShape";

export class CCircle extends CShape {
    private centerX: number = 0;
    private centerY: number = 0;
    private radius: number = 0;

    constructor(coordinates: CPoint, radius: number,
                fillColor: string, outlineColor: string, outlineThickness: number) {
        super(fillColor, outlineColor, outlineThickness);
        this.centerX = coordinates.X();
        this.centerY = coordinates.Y();
        this.radius = radius;
    }

    public getAreaSize(): number {
        const areaSize = Math.PI * Math.pow(this.radius, 2);
        return areaSize;
    }
    public getPerimeter(): number {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
    public getCenter(): CPoint {
        return new CPoint(this.centerX, this.centerY);
    }
    public getRadius(): number {
        return this.radius;
    }

    public draw(drawingArea: CDrawingArea) {
        const ctx = drawingArea.ctx;

        ctx.beginPath();
        ctx.strokeStyle = this.getOutlineColor();
        ctx.lineWidth = this.getOutlineThickness() * 2;
        ctx.fillStyle = this.getFillColor();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fill();
    }
}
