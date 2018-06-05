import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Accordion from "../../components/Accordion/Accordion";
import BootstrapInput from "../../components/CustomInput/BootstrapInput";
import RxBus from "../../uitls/RxBus";
import TestEvent from "../../action/TestEvent";
import OnToastEvent from "../../action/OnToastEvent";

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
    this.setOnTestEventLisntenr();
    }

    setOnTestEventLisntenr=()=>{
      this.subscription=RxBus.getInstance()
            .to(TestEvent.name)
            .subscribe(a=>{
            console.debug(a);
        })
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }


    componentWillUnmount() {
        this.subscription.dispose();
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

    click1=()=>{
        RxBus.getInstance().post(new OnToastEvent("测试","success"));
    }

    click2=()=>{
        let testEvent = new TestEvent();
        testEvent.age=1000;
        testEvent.name="猪八戒";
        RxBus.getInstance().post(testEvent);
    }
    new=()=>{
        console.debug(new OnToastEvent());
        let o ={}
        o["msg"]="msg";
        o["color"]="info";
        console.debug(o);
    }
    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <Button onClick={this.click1}>发射1</Button>
                <Button onClick={this.click2}>发射2</Button>
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
                <Button onClick={this.new}>我是个按钮</Button>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
