import React from 'react';
import {withStyles} from 'material-ui/styles';
import Card from "material-ui/Card";
import cx from "classnames";
import CardContent from "material-ui/Card/CardContent";
import articleCardStyle from "assets/jss/material-dashboard-pro-react/components/articleCardStyle.jsx";
import Favorite from "@material-ui/icons/Favorite";
function ArticleCard({...props}) {
    const {
        classes,
        title,
        description,
        plain,
    } = props;

    const cardClasses =
        classes.card +
        " " +
        cx({
            [classes.cardPlain]: plain
        });


    return (
        <Card className={cardClasses}>
            <CardContent className={classes.cardContent}>
                <h6 className={classes.cardTitle}>{title}</h6>
                <p className={classes.cardDescription}>{description}</p>
                <div>
                    <p style={{display:"inline",color:"#ffffff"}}>日期　</p>
                    <p style={{display:"inline"}} className={classes.cardTime}>2018-5-15 17:42:11</p>
                </div>
                <div>
                    <Favorite style={{color:"#ffffff"}}></Favorite>
                    <p style={{color:"#ffffff"}}>50</p>
                </div>
            </CardContent>
        </Card>
    );
}


export default withStyles(articleCardStyle)(ArticleCard);
