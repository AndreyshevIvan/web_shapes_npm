export class CMenuParser {
    private shapeSelector: any;

    constructor() {
        this.shapeSelector = document.getElementById("shape_selector") as HTMLSelectElement;
    }

    public getShapeName(): string {
        return (this.shapeSelector.value);
    }

    private getStrValueIfExist(fieldName: string, standartValue: string): string {
        const element = document.getElementById(fieldName) as HTMLFormElement;
        let value = element.value;

        if (value === "") {
            value  = standartValue;
        }

        return value;
    }
}
