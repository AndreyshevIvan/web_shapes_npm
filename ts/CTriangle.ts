import {CDrawingArea} from "./CDrawingArea";
import {CPoint} from "./CPoint";
import {CShape} from "./CShape";

export class CTriangle extends CShape {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    private x3: number;
    private y3: number;

    constructor(firstPoint: CPoint, secondPoint: CPoint, thirdPoint: CPoint,
                fillColor: string, outlineColor: string, outlineThickness: number) {
        super(fillColor, outlineColor, outlineThickness);
        this.x1 = firstPoint.X();
        this.y1 = firstPoint.Y();
        this.x2 = secondPoint.X();
        this.y2 = secondPoint.Y();
        this.x3 = thirdPoint.X();
        this.y3 = thirdPoint.Y();
    }

    public getAreaSize(): number {
        const firstRect = (this.x1 - this.x3) * (this.y2 - this.y3);
        const secondRect = (this.x2 - this.x3) * (this.y1 - this.y3);
        const areaSize = Math.abs(firstRect - secondRect) / 2;
        return areaSize;
    }
    public getPerimeter(): number {
        const side12 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        const side23 = Math.sqrt(Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2));
        const side31 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
        const perimeter = side12 + side23 + side31;
        return perimeter;
    }
    public getFirstPoint(): CPoint {
        return new CPoint(this.x1, this.y1);
    }
    public getSecondPoint(): CPoint {
        return new CPoint(this.x2, this.y2);
    }
    public getThirdPoint(): CPoint {
        return new CPoint(this.x3, this.y3);
    }

    public draw(drawingArea: CDrawingArea): void {
        const ctx = drawingArea.ctx;
        ctx.beginPath();
        ctx.strokeStyle = this.getOutlineColor();
        ctx.fillStyle = this.getFillColor();
        ctx.lineWidth = this.getOutlineThickness() * 2;
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.lineTo(this.x1, this.y1);
        ctx.stroke();
        ctx.fill();
    }
}
