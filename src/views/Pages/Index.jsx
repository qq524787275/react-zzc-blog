import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Banner from "react-slick";

import indexStyle from "assets/jss/material-dashboard-pro-react/pages/indexStyle.jsx";
import Switch from "material-ui/Switch";
import Favorite from "@material-ui/icons/Favorite";
import Receipt from "@material-ui/icons/Receipt";

import image1 from "assets/img/card-1.jpeg";
import image2 from "assets/img/card-2.jpeg";
import image3 from "assets/img/card-3.jpeg";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";

import IconCard from "components/Cards/IconCard";
import Snowflake from "../../spirit/Snowflake";
import Color from "color";

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

    drawCanvas = canvas => {
        console.debug(Color.rgb(255, 255, 255).alpha(0.5))
        if (!canvas) {
            return
        }
        console.debug(canvas);
        canvas.width = window.innerWidth;
        canvas.height = 1500;
        let ctx = canvas.getContext("2d");
        //雪花数组
        let arrSnow = [];
        //快要死的雪花数组
        let arrDieSnow = [];
        //下雪规则
        var rule = 0.05;


        let intval = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (Math.random() < rule) {
                let snowflake = new Snowflake();
                snowflake.dieListener = function () {
                    console.debug("死了一条雪花");
                }
                arrSnow.push(snowflake);
            }
            //画活雪花
            arrSnow.forEach((item, index) => {
                item.draw(ctx);
            })

            //画快要死的雪花
            arrDieSnow.forEach((item, index) => {
                item.draw(ctx);
            })

            arrSnow.forEach((item, index) => {
                if (item.y > 500) {
                    arrSnow.splice(index, 1);//
                    arrDieSnow.push(item);
                    item.die();
                }
            })

            //优化 清除出界的死雪花
            arrDieSnow.forEach((item, index) => {
                if (item.y > 1500) {
                    arrDieSnow.splice(index, 1);//
                }
            })
        }, 16);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                <div>
                    <div style={{
                        fontSize: 50,
                        color: "#fff",
                        position: "fixed",
                        left: "0",
                        right: "0",
                        textAlign: "center",
                        marginTop: 200
                    }}>
                        正在开发中
                    </div>
                </div>
                <canvas style={{position: "absolute", top: "0", left: "0", zIndex: 2}} ref={this.drawCanvas}/>
            </div>
        );
    }
}

export default withStyles(indexStyle)(Index);
