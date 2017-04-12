const DRAWING_AREA_ID: string = "drawing_area";
const DRAWING_AREA_WIDTH: number = 700;
const DRAWING_AREA_HEIGHT: number = 700;
const AXIS_IMAGE_OFFSET_X: number = 7;
const AXIS_IMAGE_OFFSET_Y: number = 94;
const AXIS_IMAGE_OPACITY: number = 0.15;

export class CDrawingArea {
    private drawingArea: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private axis = new Image();

    constructor() {
        this.drawingArea = document.getElementById(DRAWING_AREA_ID) as HTMLCanvasElement;
        this.drawingArea.width = DRAWING_AREA_WIDTH;
        this.drawingArea.height = DRAWING_AREA_HEIGHT;

        this.ctx = this.drawingArea.getContext("2d");
        this.ctx.translate(DRAWING_AREA_WIDTH / 2, DRAWING_AREA_HEIGHT / 2);
        this.ctx.lineJoin = "miter";
        this.ctx.lineCap = "square";

        this.axis.src = "images/axis.png";

        this.drawAxis();
    }

    public clear(): void {
        this.ctx.clearRect(
            -this.drawingArea.width / 2,
            -this.drawingArea.height / 2,
            this.drawingArea.width,
            this.drawingArea.height);
    }

    public drawAxis(): void {
        this.ctx.globalAlpha = AXIS_IMAGE_OPACITY;
        this.ctx.drawImage(this.axis, -AXIS_IMAGE_OFFSET_X, -AXIS_IMAGE_OFFSET_Y, 100, 100);
        this.ctx.globalAlpha = 1;
    }
}
