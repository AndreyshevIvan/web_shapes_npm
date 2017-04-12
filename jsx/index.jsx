class Application extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <DrawingArea/>
                <div class="clear"></div>
            </div>
        )
    }
};

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h1 class="application_title">Drawing Shape</h1>
                <ShapesSettings/>
            </div>
        )
    }
}

class ShapesSettings extends React.Component {
    render() {
        return (
            <form id="shapes_settings" onsubmit="drawShape(); return false;">
                <SelectShape/>
            </form>
        )
    }
}

class SelectShape extends React.Component {
    render() {
        return (
            <div></div>
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
