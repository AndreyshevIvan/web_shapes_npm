export class CPoint {
    private x: number = 0;
    private y: number = 0;

    constructor(x: number, y: number) {
        this.x = x * 1;
        this.y = y * 1;
    }

    public X(): number {
        return this.x;
    }
    public Y(): number {
        return this.y;
    }
}
