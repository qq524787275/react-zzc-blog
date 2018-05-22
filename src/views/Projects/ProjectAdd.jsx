import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Editor from "components/Editor/Editor";
const styles = {
    root: {},
};

class ProjectAdd extends Component {
    state = {

    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <Editor></Editor>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectAdd);
