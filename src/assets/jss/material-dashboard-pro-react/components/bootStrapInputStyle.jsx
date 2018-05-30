import {
    // grayColor,
    roseColor,
    // primaryColor,
    // infoColor,
    // successColor,
    // warningColor,
    // dangerColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const bootStrapInputStyle = theme => ({
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: roseColor,
            boxShadow: '0 0 5px 2px'+roseColor,
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
    cssLabel: {
        marginLeft:theme.spacing.unit,
        '&$cssFocused': {
            color: roseColor,
        },
    },
    cssFocused: {},
})

export default bootStrapInputStyle;
