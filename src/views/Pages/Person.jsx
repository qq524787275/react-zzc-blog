import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import personStyle from "assets/jss/material-dashboard-pro-react/pages/personStyle.jsx";
import ProfileCard from "components/Cards/ProfileCard";
import avatar from "assets/img/faces/zhuzichu.jpg";
import Button from "components/CustomButtons/Button.jsx";
import {Zoom} from 'material-ui/transitions';
import Timeline from "components/Timeline/Timeline.jsx";
// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";

const scrollTo = require('scroll-to');
const stories = [
    {
        // First story
        inverted: true,
        badgeColor: "danger",
        badgeIcon: CardTravel,
        title: "杭州网致科技",
        titleColor: "danger",
        body: (
            <p>
                技术部，Android独立开发。收集各种轮子，封装一套自己的Android开发框架。开发了一个项目后，走向模块化开发以及单Activity多Fragmnet模式。感觉开发Android没什么压力，于是准备学习其他技术作为技能储备，利用周末业余时间学习React，Spring Boot框架。开始搭建自己的博客。
            </p>
        ),
        footerTitle: "至今-2017/9/1"
    },
    {
        // Second story
        badgeColor: "success",
        badgeIcon: Extension,
        title: "杭州忒美电子商务",
        titleColor: "success",
        body: (
            <p>
                技术部，Android开发，实习。开始正式开发商业项目。期间了解了Git,Svn。Maven，Gradle，Npm。以及Nginx的基本操作。学会了怎么在Android大佬，ios大佬面前吹牛皮，一起讨论怎么怼后台大佬。
            </p>
        ),
        footerTitle: "2017/9/1-2016/7/1"
    },
    {
        // Third story
        inverted: true,
        badgeColor: "info",
        badgeIcon: Fingerprint,
        title: "湖南涉外经济学院",
        titleColor: "info",
        body: (
                <p>
                    软件工程，学习编程。了解了C，C++,JAVA,HTML,CSS,JS基本概念。对编程有了初步的认识，以至于后面学啥都快。
                </p>
        ),
        footerTitle: "2017/7/1-2013/9/1"
    },
    {
        // Fourth story
        badgeColor: "warning",
        badgeIcon: FlightLand,
        title: "读书生涯",
        titleColor: "warning",
        body: (
            <p>
                昏昏糊糊过日子,才发现我是7岁读的书。
            </p>
        ),
        footerTitle: "2013/9/1-2000/7/1"
    }
];

class Person extends Component {
    state = {
        height: window.innerHeight,
    };

    componentWillMount() {

    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        console.debug("哈哈");
        this.setState({
            height: window.innerHeight,
        });
    }

    onFollowClick = () => {
        scrollTo(0, window.innerHeight, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.content}>
                <div className={classes.container}>
                    <Zoom in={true} timeout={{enter: 500, exit: 500}}>
                        <div>
                            <ProfileCard
                                avatar={avatar}
                                subtitle="专业:软件工程　工作:Android开发"
                                title="朱子楚"
                                description="富强，民主，文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善，富强，民主，文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善，富强，民主，文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善，富强，民主，文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善"
                                content={
                                    <Button color="rose" round onClick={this.onFollowClick}>
                                        go
                                    </Button>
                                }
                            />
                        </div>
                    </Zoom>

                    <div style={{height: this.state.height}}>
                        <Timeline stories={stories} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(personStyle)(Person);
