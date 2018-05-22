import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import Editor from 'components/Editor/Editor.jsx';
import {getAbout} from "http/okgo.jsx";
import ProgressButton from "components/CustomButtons/ProgressButton.jsx";
import {updateAbout} from "../../http/okgo";
import ActionMessage from "../../action/ActionMessage";

const styles = {
    root: {},
};

class About extends Component {

    constructor(props, context) {
        super(props, context);
        this.content = "";
        this.state = {
            edit: null,
            submit: false,
        };
    }


    componentWillMount() {

    }

    componentDidMount() {
        this.loadGetAbout();
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    submit = () => {
        this.setState({
            ...this.state,
            submit: (<ProgressButton loading={true} onClick={this.submit}/>)
        })
        this.loadUpdateAbout(this.content);
    }

    loadGetAbout = async () => {
        let response = await getAbout();
        this.content = response.result.content;
        this.setState({
            ...this.state,
            edit: (<Editor onChange={this.onChange} init={this.content}></Editor>),
            submit: (<ProgressButton loading={false} onClick={this.submit}/>)
        })
        console.debug(response);
    }

    loadUpdateAbout = async (content) => {
        try {
            let response = await updateAbout(content);
            if (response.status === 1) {
                ActionMessage.getInstance().showMessage("修改成功~！", "success");
            } else {
                ActionMessage.getInstance().showMessage(response.msg, "danger");
            }
        } catch (e) {
            ActionMessage.getInstance().showMessage("网络异常", "danger");
        } finally {
            this.setState({
                ...this.state,
                submit: (<ProgressButton loading={false} onClick={this.submit}/>)
            })
        }
    }

    onChange = (content) => {
        this.content = content;
        console.debug(this.content);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                {this.state.edit}
                {this.state.submit}
            </div>
        );
    }
}

export default withStyles(styles)(About);
