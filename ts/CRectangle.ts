import {CDrawingArea} from "./CDrawingArea";
import {CPoint} from "./CPoint";
import {CShape} from "./CShape";

export class CRectangle extends CShape {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor(firstPoint: CPoint, secondPoint: CPoint,
                fillColor: string, outlineColor: string, outlineThickness: number) {
        super(fillColor, outlineColor, outlineThickness);
        this.x1 = firstPoint.X();
        this.y1 = firstPoint.Y();
        this.x2 = secondPoint.X();
        this.y2 = secondPoint.Y();
    }

    public getWidth(): number {
        return Math.abs(this.x1 - this.x2);
    }
    public getHeight(): number {
        return Math.abs(this.y1 - this.y2);
    }
    public getAreaSize(): number {
        const areaSize = this.getWidth() * this.getHeight();
        return areaSize;
    }
    public getPerimeter(): number {
        const perimeter = 2 * (this.getWidth() + this.getHeight());
        return perimeter;
    }
    public getFirstPoint(): CPoint {
        return new CPoint(this.x1, this.y1);
    }
    public getSecondPoint(): CPoint {
        return new CPoint(this.x2, this.y2);
    }

    public draw(drawingArea: CDrawingArea): void {
        const ctx = drawingArea.ctx;
        const offset = this.x2 - this.x1;

        ctx.beginPath();
        ctx.strokeStyle = this.getOutlineColor();
        ctx.lineWidth = this.getOutlineThickness() * 2;
        ctx.fillStyle = this.getFillColor();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x1 + offset, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x2 - offset, this.y2);
        ctx.lineTo(this.x1, this.y1);
        ctx.stroke();
        ctx.fill();
    }
}
