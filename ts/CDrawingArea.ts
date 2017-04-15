const DRAWING_AREA_ID: string = "drawing_area";
const DRAWING_AREA_WIDTH: number = 700;
const DRAWING_AREA_HEIGHT: number = 700;

export class CDrawingArea {
    public ctx: CanvasRenderingContext2D;
    private drawingArea: HTMLCanvasElement;

    constructor() {
        this.drawingArea = document.getElementById(DRAWING_AREA_ID) as HTMLCanvasElement;
        this.drawingArea.width = DRAWING_AREA_WIDTH;
        this.drawingArea.height = DRAWING_AREA_HEIGHT;

        this.ctx = this.drawingArea.getContext("2d");
        this.ctx.translate(DRAWING_AREA_WIDTH / 2, DRAWING_AREA_HEIGHT / 2);
        this.ctx.lineJoin = "miter";
        this.ctx.lineCap = "square";
    }

    public clear(): void {
        this.ctx.clearRect(
            -this.drawingArea.width / 2,
            -this.drawingArea.height / 2,
            this.drawingArea.width,
            this.drawingArea.height);
    }
}
