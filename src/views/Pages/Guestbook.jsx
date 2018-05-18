import React, {Component, PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';

import guestBookStyle from "assets/jss/material-dashboard-pro-react/pages/guestBookStyle.jsx";
import IconCard from "components/Cards/IconCard";

import GridContainer from "../../components/Grid/GridContainer";
import ItemGrid from "../../components/Grid/ItemGrid";

import Favorite from "@material-ui/icons/Favorite";

import {Grow} from 'material-ui/transitions';

import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import EditIcon from "@material-ui/icons/Edit";

import SweetAlert from "react-bootstrap-sweetalert";

class Guestbook extends Component {
    state = {
        aa:""
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

    clickEdit = () => {
        console.debug("点击了");

    }


    render() {
        const {classes} = this.props;
        //const { } = this.state;
        const color = [
            "orange",
            "green",
            "red",
            "blue",
            "purple",
            "rose"
        ];
        const childElements = [
            "123",
            "456",
            "789",
            "asd",
            "hjg",
            "cxz",
        ].map((element, key) => {
            let h = Math.floor(Math.random() * 150 + 100);
            let offset = Math.floor(Math.random() * 80 + 30);
            return (
                <Grow key={element} style={{transitionDelay: key * 100}} in={true}
                      timeout={{enter: 500, exit: 500}}>
                    <ItemGrid xs={12} sm={12} md={4} style={{marginTop: offset}}>
                        <IconCard
                            iconColor={color[Math.floor(Math.random() * 6 + 0)]}
                            title={"哈哈"}
                            icon={Favorite}
                            content={
                                <div
                                    style={{height: h}}></div>
                            }>

                        </IconCard>
                    </ItemGrid>
                </Grow>
            );
        });

        return (
            <div className={classes.content}>
                <div className={classes.fab}>
                    <IconButton color="primary" onClick={this.clickEdit}>
                        <EditIcon/>
                    </IconButton>
                </div>
                <div className={classes.container}>
                    <GridContainer>
                        {childElements}
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(guestBookStyle)
(
    Guestbook
)
;
