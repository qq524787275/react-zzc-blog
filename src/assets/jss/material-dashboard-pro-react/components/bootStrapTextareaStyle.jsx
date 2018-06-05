import {
    // grayColor,
    roseColor,
    // primaryColor,
    // infoColor,
    // successColor,
    // warningColor,
    // dangerColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const bootStrapTextareaStyle = theme => ({

    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
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
            boxShadow: '0 0 5px 2px' + roseColor,
            '&+$cssLabel':{
                color:roseColor
            }
        },
    },
    cssLabel: {
        marginBottom: theme.spacing.unit,
        fontSize: 14,
        marginLeft: theme.spacing.unit,
    }
})

export default bootStrapTextareaStyle;
