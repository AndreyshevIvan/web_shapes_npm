import {CDrawingArea} from "./CDrawingArea";
import {CMenuParser} from "./CMenuParser";

export class CShapeApp {
    private canvas: CDrawingArea;
    private menuParser: CMenuParser;
    private menuFields: any;

    private circleMenu = document.getElementById("circle_settings");
    private triangleMenu = document.getElementById("triangle_settings");
    private rectangleMenu = document.getElementById("rectangle_settings");
    private perimeterTab = document.getElementById("perimeter");
    private areaTab = document.getElementById("area_size");

    constructor() {
        this.canvas = new CDrawingArea();
        this.menuParser = new CMenuParser();
        this.menuFields = [
            document.getElementById("shape_fill_color"),
            document.getElementById("shape_outline_color"),
            document.getElementById("shape_outline_thickness"),
            document.getElementById("circle_radius"),
            document.getElementById("circle_x"),
            document.getElementById("circle_y"),
            document.getElementById("triangle_x_first"),
            document.getElementById("triangle_x_second"),
            document.getElementById("triangle_x_third"),
            document.getElementById("triangle_y_first"),
            document.getElementById("triangle_y_second"),
            document.getElementById("triangle_y_third"),
            document.getElementById("rect_x_first"),
            document.getElementById("rect_y_first"),
            document.getElementById("rect_x_second"),
            document.getElementById("rect_y_second")];

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

        for (let elemNum = 0; elemNum < this.menuFields.length; elemNum += 1) {
            this.menuFields[elemNum] = "";
        }

        this.resetShapeCharacteristics();
    }

    private resetShapeCharacteristics(): void {
        this.perimeterTab.innerText = "Perimeter";
        this.areaTab.innerText = "Area size";
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

    private addListeners(): void {
        document.getElementById("shape_selector").addEventListener("change", () => {
            this.synchronizeMenu();
        });
    }
}
