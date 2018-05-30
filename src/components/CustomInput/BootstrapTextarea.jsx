import React from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import Textarea from 'react-textarea-autosize';
import bootStrapTextareaStyle from "assets/jss/material-dashboard-pro-react/components/bootStrapTextareaStyle";

function BootstrapTextarea({...props}) {
    const {
        classes,
        onChange,
        lable,
        id,
    } = props

    return (
        <div style={{display:"flex",flexDirection:"column-reverse",alignItems:"flex-start"}} >
            <Textarea
                id={id}
                minRows={10}
                maxRows={10}
                onChange={onChange}
                className={classes.bootstrapInput}></Textarea>
            <div className={classes.cssLabel}>{lable}</div>
        </div>
    )
}

BootstrapTextarea.defaultProps = {
    lable:"lable",
    id:"bootstrap"
}
BootstrapTextarea.propTypes = {
    classes:PropTypes.object.isRequired,
    onChange:PropTypes.func,
    lable:PropTypes.string,
    id:PropTypes.string,
}

export default withStyles(bootStrapTextareaStyle)(BootstrapTextarea);
