class Application extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <DrawingArea/>
                <div className="clear"></div>
            </div>
        )
    }
};

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h1 className="application_title">Drawing Shape</h1>
                <ShapesSettings/>
            </div>
        )
    }
}

class ShapesSettings extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        return false;
    }

    render() {
        return (
            <form id="shapes_settings" onSubmit={ this.handleSubmit }>
                <SelectShape/>
                <CommonSettings/>
                <TriangleSettings/>
                <RectangleSettings/>
                <CirleSettings/>
                <ShapeCharacteristics/>
                <input type="submit" value="Draw" id="draw_button" className="draw_button btn" />
            </form>
        )
    }
}

class SelectShape extends React.Component {
    render() {
        return (
            <div className="selecting_shapes_block">
                <select name="shapes" id="shape_selector" className="shape_selector">
                    <option value="triangle">Triangle</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="circle">Circle</option>
                </select>
            </div>
        )
    }
}

class CommonSettings extends React.Component {
    render() {
        return (
            <div id="common_settings" className="common_settings">
                <div>
                    <div><label htmlFor="shape_fill_color">Fill color (#xxxxxx)</label></div>
                    <input type="text" id="shape_fill_color" className="shape_fill_color" pattern="#[0-9a-fA-F]{6}" />
                </div>
                <div>
                    <div><label htmlFor="shape_outline_color">Outline color (#xxxxxx)</label></div>
                    <input type="text" id="shape_outline_color" className="shape_outline_color" pattern="#[0-9a-fA-F]{6}" />
                </div>
                <div>
                    <div><label htmlFor="shape_outline_thickness">Outline thickness</label></div>
                    <input type="text" id="shape_outline_thickness" className="shape_outline_thickness" pattern="[0-9]{0,7}" />
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
class TriangleSettings extends React.Component {
    render() {
        return (
            <div id="triangle_settings" className="triangle_setting">
                <div className="coordinate_x">
                    <div><label htmlFor="triangle_x_first">X1</label></div>
                    <input type="text" id="triangle_x_first" className="triangle_x_first" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="triangle_y_first">Y1</label></div>
                    <input type="text" id="triangle_y_first" className="triangle_y_first" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_x">
                    <div><label htmlFor="triangle_x_second">X2</label></div>
                    <input type="text" id="triangle_x_second" className="triangle_x_second" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="triangle_y_second">Y2</label></div>
                    <input type="text" id="triangle_y_second" className="triangle_y_second" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_x">
                    <div><label htmlFor="triangle_x_third">X3</label></div>
                    <input type="text" id="triangle_x_third" className="triangle_x_third" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="triangle_y_third">Y3</label></div>
                    <input type="text" id="triangle_y_third" className="triangle_y_third" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
class RectangleSettings extends React.Component {
    render() {
        return (
            <div id="rectangle_settings" className="rectangle_setting">
                <div className="coordinate_x">
                    <div><label htmlFor="rect_x_first">X1</label></div>
                    <input type="text" id="rect_x_first" className="rect_x_first" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="rect_y_first">Y1</label></div>
                    <input type="text" id="rect_y_first" className="rect_y_first" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_x">
                    <div><label htmlFor="rect_x_second">X2</label></div>
                    <input type="text" id="rect_x_second" className="rect_x_second" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="rect_y_second">Y2</label></div>
                    <input type="text" id="rect_y_second" className="rect_y_second" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
class CirleSettings extends React.Component {
    render() {
        return (
            <div id="circle_settings" className="circle_setting">
                <div>
                    <div><label htmlFor="circle_radius">Radius</label></div>
                    <input type="text" id="circle_radius" className="circle_radius" pattern="[0-9]{0,7}"/>
                </div>
                <div className="coordinate_x">
                    <div><label htmlFor="circle_x">X</label></div>
                    <input type="text" id="circle_x" className="circle_x" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="coordinate_y">
                    <div><label htmlFor="circle_y">Y</label></div>
                    <input type="text" id="circle_y" className="circle_y" pattern="(-)?[0-9]{0,5}" />
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
class ShapeCharacteristics extends React.Component {
    render() {
        return (
            <div id="shape_characteristics" className="shape_characteristics">
                <div id="perimeter" className="perimeter">Perimeter</div>
                <div id="area_size" className="area_size">Area size</div>
            </div>
        )
    }
}

class DrawingArea extends React.Component {
    render() {
        return (
            <canvas id="drawing_area" className="drawing_area"></canvas>
        )
    }
};

ReactDOM.render(<Application/>, document.getElementById('application_box'));
