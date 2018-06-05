import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Banner from "react-slick";

import indexStyle from "assets/jss/material-dashboard-pro-react/pages/indexStyle.jsx";

import Favorite from "@material-ui/icons/Favorite";
import Receipt from "@material-ui/icons/Receipt";

import image1 from "assets/img/card-1.jpeg";
import image2 from "assets/img/card-2.jpeg";
import image3 from "assets/img/card-3.jpeg";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";

import IconCard from "components/Cards/IconCard";
import Snowflake from "../../spirit/Snowflake";



class Index extends Component {
    state = {};

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

    drawCanvas=canvas=>{
        if(!canvas){return}
        console.debug(canvas);
        canvas.width=window.innerWidth;
        canvas.height=1500;
        let cxt=canvas.getContext("2d");
        let snowflake = new Snowflake();
        snowflake.draw(cxt);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.content}>
                <canvas ref={this.drawCanvas} style={{backgroundColor:"#229966"}}></canvas>
            </div>
        );
    }
}

export default withStyles(indexStyle)(Index);
