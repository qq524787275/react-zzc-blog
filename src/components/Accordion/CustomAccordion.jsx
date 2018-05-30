import React from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import cx from 'classnames';
const styles = {
    root:{
        padding:10,
        backgroundColor: "#fff",
        "&:hover":{
            "& $title":{
                color:"#E91E63"
            },
            "& $iconR180":{
                color:"#E91E63"
            },
            "& $iconR0":{
                color:"#E91E63"
            },
            cursor:"pointer"
        }
    },
    title:{
      color:"#666"
    },
    iconR180:{
        transform:"rotate(180deg)",
        transition:"0.5s",
    },
    iconR0:{
        transform:"rotate(0deg)",
        transition:"0.5s",
    }
}

function CustomAccordion({...props}) {
    const {
        classes,
        isActive,
        handClick
    } = props

    const isActiveClass=cx(
        {[""+classes.iconR180]:isActive},
        {[""+classes.iconR0]:!isActive},
    )

    return (
        <div className={classes.root} onClick={()=>handClick(isActive)}>
            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center"}}>
                <div className={classes.title}>标题标题标题</div>
                <ArrowDownward className={isActiveClass}></ArrowDownward>
            </div>
        </div>
    )
}

CustomAccordion.defaultProps = {
    isActive: false
}
CustomAccordion.propTypes = {
    classes: PropTypes.object.isRequired,
    isActive: PropTypes.bool,
    handClick: PropTypes.func,
}

export default withStyles(styles)(CustomAccordion);
