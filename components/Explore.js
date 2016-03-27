import React, {Component, PropTypes} from "react";
import RaisedButton from "material-ui/lib/raised-button";
import {deepOrange500} from "material-ui/lib/styles/colors";
import getMuiTheme from "material-ui/lib/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/lib/MuiThemeProvider";

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleGoClick = this.handleGoClick.bind(this)
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <h1>Material-ui</h1>
                    <h2>Example project with React and Redux</h2>
                    <RaisedButton
                        label="Click on me"
                        primary={true}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

Explore.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
