import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const GITHUB_REPO = 'https://github.com/reactjs/redux';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }

    getInputValue() {
        return this.refs.input.value
    }

    setInputValue(val) {
        // Generally mutating DOM is a bad idea in React components,
        // but doing this for a single uncontrolled field is less fuss
        // than making it controlled and maintaining a state for it.
        this.refs.input.value = val
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.handleGoClick()
        }
    }

    handleGoClick() {
        this.props.onChange(this.getInputValue())
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <h1>material-ui</h1>
                    <h2>example project</h2>
                    <RaisedButton
                        label="Super Secret Password"
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
