import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import aboutStyle from "assets/jss/material-dashboard-pro-react/pages/aboutStyle.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import {Zoom} from 'material-ui/transitions';
import {getAbout} from "../../http/okgo";
class About extends Component {
    state = {
        card:null
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
            card:(
                <Zoom in={true} timeout={{enter: 500, exit: 500}}>
                    <div>
                        <RegularCard cardTitle={"技术栈"} content={
                            <div dangerouslySetInnerHTML={{__html: response.result.content}}>
                            </div>
                        }></RegularCard>
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
