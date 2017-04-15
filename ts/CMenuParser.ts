import {CCircle} from "./CCircle";
import {CPoint} from "./CPoint";
import {CRectangle} from "./CRectangle";
import {IShape} from "./IShape";

const DEFAULT_FILL_COLOR: string = "#3498DB";
const DEFAULT_OUTLINE_COLOR: string = "#2C3E50";
const DEFAULT_OUTLINE_THICKNESS: number = 10;

export class CMenuParser {
    private shapeSelector = document.getElementById("shape_selector") as HTMLSelectElement;
    private perimeterTab = document.getElementById("perimeter") as HTMLFormElement;
    private areaTab = document.getElementById("area_size") as HTMLFormElement;
    private fillColor = document.getElementById("shape_fill_color") as HTMLFormElement;
    private outlineColor = document.getElementById("shape_outline_color") as HTMLFormElement;
    private outlineThickness = document.getElementById("shape_outline_thickness") as HTMLFormElement;

    private firstRectX = document.getElementById("rect_x_first") as HTMLFormElement;
    private firstRectY = document.getElementById("rect_y_first") as HTMLFormElement;
    private secondRectX = document.getElementById("rect_x_second") as HTMLFormElement;
    private secondRectY = document.getElementById("rect_y_second") as HTMLFormElement;

    private circleX = document.getElementById("circle_x") as HTMLFormElement;
    private circleY = document.getElementById("circle_y") as HTMLFormElement;
    private circleRadius = document.getElementById("circle_radius") as HTMLFormElement;

    private firstTriangleX = document.getElementById("triangle_x_first") as HTMLFormElement;
    private firstTriangleY = document.getElementById("triangle_y_first") as HTMLFormElement;
    private secondTriangleX = document.getElementById("triangle_x_second") as HTMLFormElement;
    private secondTriangleY = document.getElementById("triangle_y_second") as HTMLFormElement;
    private thirdTriangleX = document.getElementById("triangle_x_third") as HTMLFormElement;
    private thirdTriangleY = document.getElementById("triangle_y_third") as HTMLFormElement;

    constructor() {
        return;
    }

    public getShapeName(): string {
        return (this.shapeSelector.value);
    }
    public getCircle(): CCircle {
        const fillColor = this.getFillColor();
        const outlineColor = this.getOutlineColor();
        const outlineThickness = this.getOutlineThickness();
        const coordinate = this.getCircleCoordinates();
        const radius = this.getCircleRadius();

        const rect: CCircle = new CCircle(coordinate, radius, fillColor, outlineColor, outlineThickness);
        return rect;
    }
    public getRectangle(): CRectangle {
        const fillColor = this.getFillColor();
        const outlineColor = this.getOutlineColor();
        const outlineThickness = this.getOutlineThickness();
        const firstPoint = this.getFirstRectPoint();
        const secondPoint = this.getSecondRectPoint();

        const rect: CRectangle = new CRectangle(firstPoint, secondPoint, fillColor, outlineColor, outlineThickness);
        return rect;
    }
    public getTriangle(): number {
        return 1;
    }
    public resetFields(): void {
        this.perimeterTab.innerText = "Perimeter: ";
        this.areaTab.innerText = "Area size: ";
    }
    public setCircleToMenu(circle: CCircle): void {
        this.setShapeToMenu(circle);
        this.circleX.value = circle.getCenter().X();
        this.circleY.value = -1 * circle.getCenter().Y();
        this.circleRadius.value = circle.getRadius();
    }
    public setRectToMenu(rect: CRectangle): void {
        this.setShapeToMenu(rect);
        this.firstRectX.value = rect.getFirstPoint().X();
        this.firstRectY.value = -1 * rect.getFirstPoint().Y();
        this.secondRectX.value = rect.getSecondPoint().X();
        this.secondRectY.value = -1 * rect.getSecondPoint().Y();
    }

    public setShapeToMenu(shape: IShape): void {
        this.resetFields();
        this.perimeterTab.innerText += shape.getPerimeter().toString();
        this.areaTab.innerText += shape.getAreaSize().toString();
        this.fillColor.value = shape.getFillColor();
        this.outlineColor.value = shape.getOutlineColor();
        this.outlineThickness.value = shape.getOutlineThickness();
    }

    private getFillColor(): string {
        return this.getStrValueIfExist(this.fillColor, DEFAULT_FILL_COLOR);
    }
    private getOutlineColor() {
        return this.getStrValueIfExist(this.outlineColor, DEFAULT_OUTLINE_COLOR);
    }
    private getOutlineThickness() {
        return this.getNumValueIfExist(this.outlineThickness, DEFAULT_OUTLINE_THICKNESS);
    }
    private getFirstRectPoint(): CPoint {
        const x: number = this.getNumValueIfExist(this.firstRectX, 0);
        const y: number = this.getNumValueIfExist(this.firstRectY, 0);
        return new CPoint(x, -1 * y);
    }
    private getSecondRectPoint(): CPoint {
        const x: number = this.getNumValueIfExist(this.secondRectX, 0);
        const y: number = this.getNumValueIfExist(this.secondRectY, 0);
        return new CPoint(x, -1 * y);
    }
    private getCircleCoordinates(): CPoint {
        const x: number = this.getNumValueIfExist(this.circleX, 0);
        const y: number = this.getNumValueIfExist(this.circleY, 0);
        return new CPoint(x, -1 * y);
    }
    private getCircleRadius(): number {
        return this.getNumValueIfExist(this.circleRadius, 10);
    }

    private getStrValueIfExist(form: HTMLFormElement, defaultValue: string): string {
        const value: string = (form.value === "") ? defaultValue : form.value;
        return value;
    }
    private getNumValueIfExist(form: HTMLFormElement, defaultValue: number): number {
        const value: number = (form.value === "") ? defaultValue : form.value;
        return value;
    }
}
