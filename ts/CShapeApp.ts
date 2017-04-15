import {CCircle} from "./CCircle";
import {CDrawingArea} from "./CDrawingArea";
import {CMenuParser} from "./CMenuParser";
import {CRectangle} from "./CRectangle";

export class CShapeApp {
    private canvas: CDrawingArea;
    private menuParser: CMenuParser;

    private circleMenu = document.getElementById("circle_settings");
    private triangleMenu = document.getElementById("triangle_settings");
    private rectangleMenu = document.getElementById("rectangle_settings");

    constructor() {
        this.canvas = new CDrawingArea();
        this.menuParser = new CMenuParser();

        this.addListeners();
        this.synchronizeMenu();
    }

    private synchronizeMenu(): void {
        this.canvas.clear();
        this.resetMenu();
        this.setNewMenu();
    }

    private resetMenu(): void {
        this.circleMenu.style.display = "none";
        this.triangleMenu.style.display = "none";
        this.rectangleMenu.style.display = "none";
        this.menuParser.resetFields();
    }

    private setNewMenu(): void {
        const shapeName = this.menuParser.getShapeName();

        if (shapeName === "circle") {
            this.circleMenu.style.display = "block";
        }
        if (shapeName === "triangle") {
            this.triangleMenu.style.display = "block";
        }
        if (shapeName === "rectangle") {
            this.rectangleMenu.style.display = "block";
        }
    }
    private drawShape(): void {
        this.canvas.clear();
        const shapeName: string = this.menuParser.getShapeName();

        if (shapeName === "circle") {
            const circle: CCircle = this.menuParser.getCircle();
            circle.draw(this.canvas);
            this.menuParser.setCircleToMenu(circle);
        }
        if (shapeName === "triangle") {
            return;
        }
        if (shapeName === "rectangle") {
            const rect: CRectangle = this.menuParser.getRectangle();
            rect.draw(this.canvas);
            this.menuParser.setRectToMenu(rect);
        }
    }

    private addListeners(): void {
        document.getElementById("shape_selector").addEventListener("change", () => {
            this.synchronizeMenu();
        });
        document.getElementById("draw_button").addEventListener("click", () => {
            this.drawShape();
        });
    }
}
