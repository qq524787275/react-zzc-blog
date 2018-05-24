import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import aboutStyle from "assets/jss/material-dashboard-pro-react/pages/aboutStyle.jsx";
import HeaderCard from "components/Cards/HeaderCard.jsx";
import {Zoom} from 'material-ui/transitions';
import {getAbout} from "../../http/okgo";

class About extends Component {
    state = {
        card: null
    };

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

    loadGetAbout = async () => {
        let response = await getAbout();
        this.content = response.result.content;

        this.setState({
            ...this.state,
            card: (
                <Zoom in={true} timeout={{enter: 500, exit: 500}}>
                    <div>
                        <HeaderCard cardTitle={"技术栈"} headerColor={"rose"} content={
                            <div dangerouslySetInnerHTML={{__html: response.result.content}}>
                            </div>
                        }></HeaderCard>
                    </div>
                </Zoom>
            )
        })
        console.debug(response);
    }

    componentWillUnmount() {

    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.content}>
                <div className={classes.container}>
                    {this.state.card}
                </div>
            </div>
        );
    }
}

export default withStyles(aboutStyle)(About);
