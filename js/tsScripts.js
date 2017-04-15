var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("CDrawingArea", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DRAWING_AREA_ID, DRAWING_AREA_WIDTH, DRAWING_AREA_HEIGHT, CDrawingArea;
    return {
        setters: [],
        execute: function () {
            DRAWING_AREA_ID = "drawing_area";
            DRAWING_AREA_WIDTH = 700;
            DRAWING_AREA_HEIGHT = 700;
            CDrawingArea = (function () {
                function CDrawingArea() {
                    this.drawingArea = document.getElementById(DRAWING_AREA_ID);
                    this.drawingArea.width = DRAWING_AREA_WIDTH;
                    this.drawingArea.height = DRAWING_AREA_HEIGHT;
                    this.ctx = this.drawingArea.getContext("2d");
                    this.ctx.translate(DRAWING_AREA_WIDTH / 2, DRAWING_AREA_HEIGHT / 2);
                    this.ctx.lineJoin = "miter";
                    this.ctx.lineCap = "square";
                }
                CDrawingArea.prototype.clear = function () {
                    this.ctx.clearRect(-this.drawingArea.width / 2, -this.drawingArea.height / 2, this.drawingArea.width, this.drawingArea.height);
                };
                return CDrawingArea;
            }());
            exports_1("CDrawingArea", CDrawingArea);
        }
    };
});
System.register("CPoint", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var CPoint;
    return {
        setters: [],
        execute: function () {
            CPoint = (function () {
                function CPoint(x, y) {
                    this.x = 0;
                    this.y = 0;
                    this.x = x * 1;
                    this.y = y * 1;
                }
                CPoint.prototype.X = function () {
                    return this.x;
                };
                CPoint.prototype.Y = function () {
                    return this.y;
                };
                return CPoint;
            }());
            exports_2("CPoint", CPoint);
        }
    };
});
System.register("IShape", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("CShape", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var CShape;
    return {
        setters: [],
        execute: function () {
            CShape = (function () {
                function CShape(fillColor, outlineColor, outlineThickness) {
                    this.fillColor = fillColor;
                    this.outlineColor = outlineColor;
                    this.outlineThickness = outlineThickness;
                }
                CShape.prototype.getFillColor = function () {
                    return this.fillColor;
                };
                CShape.prototype.getOutlineColor = function () {
                    return this.outlineColor;
                };
                CShape.prototype.getOutlineThickness = function () {
                    return this.outlineThickness;
                };
                CShape.prototype.setFillColor = function (color) {
                    this.fillColor = color;
                };
                CShape.prototype.setOutlineColor = function (color) {
                    this.outlineColor = color;
                };
                CShape.prototype.setOutlineThickness = function (outlineThickness) {
                    this.outlineThickness = outlineThickness;
                };
                return CShape;
            }());
            exports_4("CShape", CShape);
        }
    };
});
System.register("CCircle", ["CPoint", "CShape"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var CPoint_1, CShape_1, CCircle;
    return {
        setters: [
            function (CPoint_1_1) {
                CPoint_1 = CPoint_1_1;
            },
            function (CShape_1_1) {
                CShape_1 = CShape_1_1;
            }
        ],
        execute: function () {
            CCircle = (function (_super) {
                __extends(CCircle, _super);
                function CCircle(coordinates, radius, fillColor, outlineColor, outlineThickness) {
                    var _this = _super.call(this, fillColor, outlineColor, outlineThickness) || this;
                    _this.centerX = 0;
                    _this.centerY = 0;
                    _this.radius = 0;
                    _this.centerX = coordinates.X();
                    _this.centerY = coordinates.Y();
                    _this.radius = radius;
                    return _this;
                }
                CCircle.prototype.getAreaSize = function () {
                    var areaSize = Math.PI * Math.pow(this.radius, 2);
                    return areaSize;
                };
                CCircle.prototype.getPerimeter = function () {
                    var perimeter = 2 * Math.PI * this.radius;
                    return perimeter;
                };
                CCircle.prototype.getCenter = function () {
                    return new CPoint_1.CPoint(this.centerX, this.centerY);
                };
                CCircle.prototype.getRadius = function () {
                    return this.radius;
                };
                CCircle.prototype.draw = function (drawingArea) {
                    var ctx = drawingArea.ctx;
                    ctx.beginPath();
                    ctx.strokeStyle = this.getOutlineColor();
                    ctx.lineWidth = this.getOutlineThickness() * 2;
                    ctx.fillStyle = this.getFillColor();
                    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, true);
                    ctx.stroke();
                    ctx.fill();
                };
                return CCircle;
            }(CShape_1.CShape));
            exports_5("CCircle", CCircle);
        }
    };
});
System.register("CRectangle", ["CPoint", "CShape"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var CPoint_2, CShape_2, CRectangle;
    return {
        setters: [
            function (CPoint_2_1) {
                CPoint_2 = CPoint_2_1;
            },
            function (CShape_2_1) {
                CShape_2 = CShape_2_1;
            }
        ],
        execute: function () {
            CRectangle = (function (_super) {
                __extends(CRectangle, _super);
                function CRectangle(firstPoint, secondPoint, fillColor, outlineColor, outlineThickness) {
                    var _this = _super.call(this, fillColor, outlineColor, outlineThickness) || this;
                    _this.x1 = firstPoint.X();
                    _this.y1 = firstPoint.Y();
                    _this.x2 = secondPoint.X();
                    _this.y2 = secondPoint.Y();
                    return _this;
                }
                CRectangle.prototype.getWidth = function () {
                    return Math.abs(this.x1 - this.x2);
                };
                CRectangle.prototype.getHeight = function () {
                    return Math.abs(this.y1 - this.y2);
                };
                CRectangle.prototype.getAreaSize = function () {
                    var areaSize = this.getWidth() * this.getHeight();
                    return areaSize;
                };
                CRectangle.prototype.getPerimeter = function () {
                    var perimeter = 2 * (this.getWidth() + this.getHeight());
                    return perimeter;
                };
                CRectangle.prototype.getFirstPoint = function () {
                    return new CPoint_2.CPoint(this.x1, this.y1);
                };
                CRectangle.prototype.getSecondPoint = function () {
                    return new CPoint_2.CPoint(this.x2, this.y2);
                };
                CRectangle.prototype.draw = function (drawingArea) {
                    var ctx = drawingArea.ctx;
                    var offset = this.x2 - this.x1;
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
                };
                return CRectangle;
            }(CShape_2.CShape));
            exports_6("CRectangle", CRectangle);
        }
    };
});
System.register("CMenuParser", ["CCircle", "CPoint", "CRectangle"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var CCircle_1, CPoint_3, CRectangle_1, DEFAULT_FILL_COLOR, DEFAULT_OUTLINE_COLOR, DEFAULT_OUTLINE_THICKNESS, CMenuParser;
    return {
        setters: [
            function (CCircle_1_1) {
                CCircle_1 = CCircle_1_1;
            },
            function (CPoint_3_1) {
                CPoint_3 = CPoint_3_1;
            },
            function (CRectangle_1_1) {
                CRectangle_1 = CRectangle_1_1;
            }
        ],
        execute: function () {
            DEFAULT_FILL_COLOR = "#3498DB";
            DEFAULT_OUTLINE_COLOR = "#2C3E50";
            DEFAULT_OUTLINE_THICKNESS = 10;
            CMenuParser = (function () {
                function CMenuParser() {
                    this.shapeSelector = document.getElementById("shape_selector");
                    this.perimeterTab = document.getElementById("perimeter");
                    this.areaTab = document.getElementById("area_size");
                    this.fillColor = document.getElementById("shape_fill_color");
                    this.outlineColor = document.getElementById("shape_outline_color");
                    this.outlineThickness = document.getElementById("shape_outline_thickness");
                    this.firstRectX = document.getElementById("rect_x_first");
                    this.firstRectY = document.getElementById("rect_y_first");
                    this.secondRectX = document.getElementById("rect_x_second");
                    this.secondRectY = document.getElementById("rect_y_second");
                    this.circleX = document.getElementById("circle_x");
                    this.circleY = document.getElementById("circle_y");
                    this.circleRadius = document.getElementById("circle_radius");
                    this.firstTriangleX = document.getElementById("triangle_x_first");
                    this.firstTriangleY = document.getElementById("triangle_y_first");
                    this.secondTriangleX = document.getElementById("triangle_x_second");
                    this.secondTriangleY = document.getElementById("triangle_y_second");
                    this.thirdTriangleX = document.getElementById("triangle_x_third");
                    this.thirdTriangleY = document.getElementById("triangle_y_third");
                    return;
                }
                CMenuParser.prototype.getShapeName = function () {
                    return (this.shapeSelector.value);
                };
                CMenuParser.prototype.getCircle = function () {
                    var fillColor = this.getFillColor();
                    var outlineColor = this.getOutlineColor();
                    var outlineThickness = this.getOutlineThickness();
                    var coordinate = this.getCircleCoordinates();
                    var radius = this.getCircleRadius();
                    var rect = new CCircle_1.CCircle(coordinate, radius, fillColor, outlineColor, outlineThickness);
                    return rect;
                };
                CMenuParser.prototype.getRectangle = function () {
                    var fillColor = this.getFillColor();
                    var outlineColor = this.getOutlineColor();
                    var outlineThickness = this.getOutlineThickness();
                    var firstPoint = this.getFirstRectPoint();
                    var secondPoint = this.getSecondRectPoint();
                    var rect = new CRectangle_1.CRectangle(firstPoint, secondPoint, fillColor, outlineColor, outlineThickness);
                    return rect;
                };
                CMenuParser.prototype.getTriangle = function () {
                    return 1;
                };
                CMenuParser.prototype.resetFields = function () {
                    this.perimeterTab.innerText = "Perimeter: ";
                    this.areaTab.innerText = "Area size: ";
                };
                CMenuParser.prototype.setCircleToMenu = function (circle) {
                    this.setShapeToMenu(circle);
                    this.circleX.value = circle.getCenter().X();
                    this.circleY.value = -1 * circle.getCenter().Y();
                    this.circleRadius.value = circle.getRadius();
                };
                CMenuParser.prototype.setRectToMenu = function (rect) {
                    this.setShapeToMenu(rect);
                    this.firstRectX.value = rect.getFirstPoint().X();
                    this.firstRectY.value = -1 * rect.getFirstPoint().Y();
                    this.secondRectX.value = rect.getSecondPoint().X();
                    this.secondRectY.value = -1 * rect.getSecondPoint().Y();
                };
                CMenuParser.prototype.setShapeToMenu = function (shape) {
                    this.resetFields();
                    this.perimeterTab.innerText += shape.getPerimeter().toString();
                    this.areaTab.innerText += shape.getAreaSize().toString();
                    this.fillColor.value = shape.getFillColor();
                    this.outlineColor.value = shape.getOutlineColor();
                    this.outlineThickness.value = shape.getOutlineThickness();
                };
                CMenuParser.prototype.getFillColor = function () {
                    return this.getStrValueIfExist(this.fillColor, DEFAULT_FILL_COLOR);
                };
                CMenuParser.prototype.getOutlineColor = function () {
                    return this.getStrValueIfExist(this.outlineColor, DEFAULT_OUTLINE_COLOR);
                };
                CMenuParser.prototype.getOutlineThickness = function () {
                    return this.getNumValueIfExist(this.outlineThickness, DEFAULT_OUTLINE_THICKNESS);
                };
                CMenuParser.prototype.getFirstRectPoint = function () {
                    var x = this.getNumValueIfExist(this.firstRectX, 0);
                    var y = this.getNumValueIfExist(this.firstRectY, 0);
                    return new CPoint_3.CPoint(x, -1 * y);
                };
                CMenuParser.prototype.getSecondRectPoint = function () {
                    var x = this.getNumValueIfExist(this.secondRectX, 0);
                    var y = this.getNumValueIfExist(this.secondRectY, 0);
                    return new CPoint_3.CPoint(x, -1 * y);
                };
                CMenuParser.prototype.getCircleCoordinates = function () {
                    var x = this.getNumValueIfExist(this.circleX, 0);
                    var y = this.getNumValueIfExist(this.circleY, 0);
                    return new CPoint_3.CPoint(x, -1 * y);
                };
                CMenuParser.prototype.getCircleRadius = function () {
                    return this.getNumValueIfExist(this.circleRadius, 10);
                };
                CMenuParser.prototype.getStrValueIfExist = function (form, defaultValue) {
                    var value = (form.value === "") ? defaultValue : form.value;
                    return value;
                };
                CMenuParser.prototype.getNumValueIfExist = function (form, defaultValue) {
                    var value = (form.value === "") ? defaultValue : form.value;
                    return value;
                };
                return CMenuParser;
            }());
            exports_7("CMenuParser", CMenuParser);
        }
    };
});
System.register("CShapeApp", ["CDrawingArea", "CMenuParser"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
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
                    this.canvas = new CDrawingArea_1.CDrawingArea();
                    this.menuParser = new CMenuParser_1.CMenuParser();
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
                    this.menuParser.resetFields();
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
                CShapeApp.prototype.drawShape = function () {
                    this.canvas.clear();
                    var shapeName = this.menuParser.getShapeName();
                    if (shapeName === "circle") {
                        var circle = this.menuParser.getCircle();
                        circle.draw(this.canvas);
                        this.menuParser.setCircleToMenu(circle);
                    }
                    if (shapeName === "triangle") {
                        return;
                    }
                    if (shapeName === "rectangle") {
                        var rect = this.menuParser.getRectangle();
                        rect.draw(this.canvas);
                        this.menuParser.setRectToMenu(rect);
                    }
                };
                CShapeApp.prototype.addListeners = function () {
                    var _this = this;
                    document.getElementById("shape_selector").addEventListener("change", function () {
                        _this.synchronizeMenu();
                    });
                    document.getElementById("draw_button").addEventListener("click", function () {
                        _this.drawShape();
                    });
                };
                return CShapeApp;
            }());
            exports_8("CShapeApp", CShapeApp);
        }
    };
});
System.register("CTriangle", ["CPoint", "CShape"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var CPoint_4, CShape_3, CTriangle;
    return {
        setters: [
            function (CPoint_4_1) {
                CPoint_4 = CPoint_4_1;
            },
            function (CShape_3_1) {
                CShape_3 = CShape_3_1;
            }
        ],
        execute: function () {
            CTriangle = (function (_super) {
                __extends(CTriangle, _super);
                function CTriangle(firstPoint, secondPoint, thirdPoint, fillColor, outlineColor, outlineThickness) {
                    var _this = _super.call(this, fillColor, outlineColor, outlineThickness) || this;
                    _this.x1 = firstPoint.X();
                    _this.y1 = firstPoint.Y();
                    _this.x2 = secondPoint.X();
                    _this.y2 = secondPoint.Y();
                    _this.x3 = thirdPoint.X();
                    _this.y3 = thirdPoint.Y();
                    return _this;
                }
                CTriangle.prototype.getAreaSize = function () {
                    var firstRect = (this.x1 - this.x3) * (this.y2 - this.y3);
                    var secondRect = (this.x2 - this.x3) * (this.y1 - this.y3);
                    var areaSize = Math.abs(firstRect - secondRect) / 2;
                    return areaSize;
                };
                CTriangle.prototype.getPerimeter = function () {
                    var side12 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
                    var side23 = Math.sqrt(Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2));
                    var side31 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
                    var perimeter = side12 + side23 + side31;
                    return perimeter;
                };
                CTriangle.prototype.getFirstPoint = function () {
                    return new CPoint_4.CPoint(this.x1, this.y1);
                };
                CTriangle.prototype.getSecondPoint = function () {
                    return new CPoint_4.CPoint(this.x2, this.y2);
                };
                CTriangle.prototype.getThirdPoint = function () {
                    return new CPoint_4.CPoint(this.x3, this.y3);
                };
                CTriangle.prototype.draw = function (drawingArea) {
                    var ctx = drawingArea.ctx;
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
                };
                return CTriangle;
            }(CShape_3.CShape));
            exports_9("CTriangle", CTriangle);
        }
    };
});
System.register("main", ["CShapeApp"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
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
