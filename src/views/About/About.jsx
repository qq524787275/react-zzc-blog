import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import Editor from 'components/Editor/Editor.jsx';
import {getAbout, updateAbout} from "http/okgo.jsx";
import ProgressButton from "components/CustomButtons/ProgressButton.jsx";
import HeaderCard from "components/Cards/HeaderCard.jsx";
import OnToastEvent from "../../action/OnToastEvent";
import RxBus from "../../uitls/RxBus";

const styles = {
    root: {},
    header: {
        "&:hover": {
            fontWeight: "bold",
        }
    }
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

    loadGetAbout =async () => {
        let response=await getAbout();
        this.content = response.result.content;
        this.setState({
            ...this.state,
            edit: (<Editor onChange={this.onChange} init={this.content}></Editor>),
            submit: (<ProgressButton loading={false} onClick={this.submit}/>)
        })
    }

    loadUpdateAbout = async (content) => {
        try {
            let response = await updateAbout(content);
            if (response.status === 1) {
                RxBus.getInstance().post(new OnToastEvent("修改成功~","success"));
            } else {
                RxBus.getInstance().post(new OnToastEvent(response.msg,"danger"));
            }
        } catch (e) {
            RxBus.getInstance().post(new OnToastEvent("网路异常","danger"));
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

    go = () => {
        window.open("http://localhost:3000/about")
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <HeaderCard cardTitle={<div className={classes.header} onClick={this.go}>更新关于信息</div>}
                            content={
                                <div>
                                    {this.state.edit}
                                    {this.state.submit}
                                </div>
                            }/>
            </div>
        );
    }
}

export default withStyles(styles)(About);
