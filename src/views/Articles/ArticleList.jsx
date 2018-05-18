import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import articleListStyle from "assets/jss/material-dashboard-pro-react/views/articleListStyle.jsx";

import IconCard from "components/Cards/IconCard.jsx";

import Assignment from "@material-ui/icons/Assignment";

class ArticleList extends Component {
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


    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <IconCard
                    icon={Assignment}
                    title={"文章"}
                    content={
                    <div>

                    </div>
                    }></IconCard>
            </div>
        );
    }
}

export default withStyles(articleListStyle)(ArticleList);
