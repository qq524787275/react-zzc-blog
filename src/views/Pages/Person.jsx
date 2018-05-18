import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import personStyle from "assets/jss/material-dashboard-pro-react/pages/personStyle.jsx";
import ProfileCard from "components/Cards/ProfileCard";
import avatar from "assets/img/faces/zhuzichu.jpg";
import Button from "components/CustomButtons/Button.jsx";
import {Zoom} from 'material-ui/transitions';

const scrollTo = require('scroll-to');


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
                        <div style={{height: this.state.height - 200, paddingTop: 60}}>
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

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(personStyle)(Person);
