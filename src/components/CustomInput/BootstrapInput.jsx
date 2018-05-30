import React from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';
import bootStrapInputStyle from "assets/jss/material-dashboard-pro-react/components/bootStrapInputStyle";

function BootstrapInput({...props}) {
    const {
        classes,
        onChange,
        defaultValue,
        lable,
        id
    } = props

    return (
        <div>
            <TextField
                defaultValue={defaultValue}
                label={lable}
                id={id}
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapInput,
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                    FormLabelClasses: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    }
                }}
                onChange={onChange}
            />
        </div>
    )
}

BootstrapInput.defaultProps = {
    lable: "lable",
    id:"bootstrap"
}
BootstrapInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    lable: PropTypes.string,
    id: PropTypes.string,
}

export default withStyles(bootStrapInputStyle)(BootstrapInput);
