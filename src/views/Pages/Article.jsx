import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import articleStyle from "assets/jss/material-dashboard-pro-react/pages/articleStyle.jsx";
import ArticleCard from "components/Cards/ArticleCard.jsx";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";

class Article extends Component {
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
            <div className={classes.content}>
                <div className={classes.container}>
                    <GridContainer>
                        <ItemGrid xs={3} style={{marginBottom:"20px"}}>
                            <ArticleCard
                                plain
                                title={"标题"}
                                description={"描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题标题标题标题标题标题标题标题标题"}
                                description={"描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题"}
                                description={"描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题标题标题标题标题标题标题标题标题"}
                                description={"描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题"}
                                description={"描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题标题标题标题标题标题标题标题标题"}
                                description={"描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题"}
                                description={"描述信息"}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            <ArticleCard
                                plain
                                title={"标题标题标题标题标题标题标题标题标题"}
                                description={"描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"}
                            />
                        </ItemGrid>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(articleStyle)(Article);
