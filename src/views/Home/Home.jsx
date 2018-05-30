import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Accordion from "../../components/Accordion/Accordion";
import BootstrapInput from "../../components/CustomInput/BootstrapInput";

const styles = {
    root: {},
};


class Home extends Component {
    state = {
        isOpen: false,
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

    handClick = (a) => {
        this.setState({
            ...this.state,
            isOpen: !a,
        })
    }

    handInputChange=event=>{
        console.debug(event.target.id);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <Button>首页</Button>
                <Accordion collapses={[
                    {
                        title: "一级目录",
                        content: "内容"
                    },
                    {
                        title: "一级目录",
                        content: "内容"
                    }
                    , {
                        title: "一级目录",
                        content: "内容"
                    }
                ]}
                active={0}></Accordion>
                <BootstrapInput id={"username"} onChange={this.handInputChange} defaultValue={"孙悟空"} lable={"姓名"}></BootstrapInput>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
