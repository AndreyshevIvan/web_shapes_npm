System.register("CDrawingArea", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DRAWING_AREA_ID, DRAWING_AREA_WIDTH, DRAWING_AREA_HEIGHT, AXIS_IMAGE_OFFSET_X, AXIS_IMAGE_OFFSET_Y, AXIS_IMAGE_OPACITY, CDrawingArea;
    return {
        setters: [],
        execute: function () {
            DRAWING_AREA_ID = "drawing_area";
            DRAWING_AREA_WIDTH = 700;
            DRAWING_AREA_HEIGHT = 700;
            AXIS_IMAGE_OFFSET_X = 7;
            AXIS_IMAGE_OFFSET_Y = 94;
            AXIS_IMAGE_OPACITY = 0.15;
            CDrawingArea = (function () {
                function CDrawingArea() {
                    this.axis = new Image();
                    this.drawingArea = document.getElementById(DRAWING_AREA_ID);
                    this.drawingArea.width = DRAWING_AREA_WIDTH;
                    this.drawingArea.height = DRAWING_AREA_HEIGHT;
                    this.ctx = this.drawingArea.getContext("2d");
                    this.ctx.translate(DRAWING_AREA_WIDTH / 2, DRAWING_AREA_HEIGHT / 2);
                    this.ctx.lineJoin = "miter";
                    this.ctx.lineCap = "square";
                    this.axis.src = "images/axis.png";
                    this.drawAxis();
                }
                CDrawingArea.prototype.clear = function () {
                    this.ctx.clearRect(-this.drawingArea.width / 2, -this.drawingArea.height / 2, this.drawingArea.width, this.drawingArea.height);
                };
                CDrawingArea.prototype.drawAxis = function () {
                    this.ctx.globalAlpha = AXIS_IMAGE_OPACITY;
                    this.ctx.drawImage(this.axis, -AXIS_IMAGE_OFFSET_X, -AXIS_IMAGE_OFFSET_Y, 100, 100);
                    this.ctx.globalAlpha = 1;
                };
                return CDrawingArea;
            }());
            exports_1("CDrawingArea", CDrawingArea);
        }
    };
});
System.register("CMenuParser", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var CMenuParser;
    return {
        setters: [],
        execute: function () {
            CMenuParser = (function () {
                function CMenuParser() {
                    this.shapeSelector = document.getElementById("shape_selector");
                }
                CMenuParser.prototype.getShapeName = function () {
                    return (this.shapeSelector.value);
                };
                CMenuParser.prototype.getStrValueIfExist = function (fieldName, standartValue) {
                    var element = document.getElementById(fieldName);
                    var value = element.value;
                    if (value === "") {
                        value = standartValue;
                    }
                    return value;
                };
                return CMenuParser;
            }());
            exports_2("CMenuParser", CMenuParser);
        }
    };
});
System.register("CShape", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var STANDART_FILL_COLOR, STANDART_OUTLINE_COLOR, STANDART_OUTLINE_THICKNESS, CShape;
    return {
        setters: [],
        execute: function () {
            STANDART_FILL_COLOR = "#3498DB";
            STANDART_OUTLINE_COLOR = "#2C3E50";
            STANDART_OUTLINE_THICKNESS = 10;
            CShape = (function () {
                function CShape() {
                    this.fillColor = STANDART_FILL_COLOR;
                    this.outlineColor = STANDART_OUTLINE_COLOR;
                    this.outlineThickness = STANDART_OUTLINE_THICKNESS;
                }
                CShape.prototype.setFillColor = function (color) {
                    this.fillColor = color;
                };
                CShape.prototype.setOutlineColor = function (color) {
                    this.outlineColor = color;
                };
                CShape.prototype.setOutlineThickness = function (outlineThickness) {
                    this.outlineThickness = outlineThickness;
                };
                CShape.prototype.getFillColor = function () {
                    return this.fillColor;
                };
                CShape.prototype.getOutlineColor = function () {
                    return this.outlineColor;
                };
                CShape.prototype.getOutlineThickness = function () {
                    return this.outlineThickness;
                };
                return CShape;
            }());
            exports_3("CShape", CShape);
        }
    };
});
System.register("CShapeApp", ["CDrawingArea", "CMenuParser"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var CDrawingArea_1, CMenuParser_1, CShapeApp;
    return {
        setters: [
            function (CDrawingArea_1_1) {
                CDrawingArea_1 = CDrawingArea_1_1;
            },
            function (CMenuParser_1_1) {
                CMenuParser_1 = CMenuParser_1_1;
            }
        ],
        execute: function () {
            CShapeApp = (function () {
                function CShapeApp() {
                    this.circleMenu = document.getElementById("circle_settings");
                    this.triangleMenu = document.getElementById("triangle_settings");
                    this.rectangleMenu = document.getElementById("rectangle_settings");
                    this.perimeterTab = document.getElementById("perimeter");
                    this.areaTab = document.getElementById("area_size");
                    this.canvas = new CDrawingArea_1.CDrawingArea();
                    this.menuParser = new CMenuParser_1.CMenuParser();
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
                        document.getElementById("rect_y_second")
                    ];
                    this.addListeners();
                    this.synchronizeMenu();
                }
                CShapeApp.prototype.synchronizeMenu = function () {
                    this.canvas.clear();
                    this.resetMenu();
                    this.setNewMenu();
                };
                CShapeApp.prototype.resetMenu = function () {
                    this.circleMenu.style.display = "none";
                    this.triangleMenu.style.display = "none";
                    this.rectangleMenu.style.display = "none";
                    for (var elemNum = 0; elemNum < this.menuFields.length; elemNum += 1) {
                        this.menuFields[elemNum] = "";
                    }
                    this.resetShapeCharacteristics();
                };
                CShapeApp.prototype.resetShapeCharacteristics = function () {
                    this.perimeterTab.innerText = "Perimeter";
                    this.areaTab.innerText = "Area size";
                };
                CShapeApp.prototype.setNewMenu = function () {
                    var shapeName = this.menuParser.getShapeName();
                    if (shapeName === "circle") {
                        this.circleMenu.style.display = "block";
                    }
                    if (shapeName === "triangle") {
                        this.triangleMenu.style.display = "block";
                    }
                    if (shapeName === "rectangle") {
                        this.rectangleMenu.style.display = "block";
                    }
                };
                CShapeApp.prototype.addListeners = function () {
                    var _this = this;
                    document.getElementById("shape_selector").addEventListener("change", function () {
                        _this.synchronizeMenu();
                    });
                };
                return CShapeApp;
            }());
            exports_4("CShapeApp", CShapeApp);
        }
    };
});
System.register("main", ["CShapeApp"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var CShapeApp_1;
    return {
        setters: [
            function (CShapeApp_1_1) {
                CShapeApp_1 = CShapeApp_1_1;
            }
        ],
        execute: function () {
            window.onload = function () {
                var application = new CShapeApp_1.CShapeApp();
            };
        }
    };
});
