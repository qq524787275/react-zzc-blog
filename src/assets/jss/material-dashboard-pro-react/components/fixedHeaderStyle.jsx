// ##############################
// // // Header styles
// #############################

import {
    container,
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    transition,
    boxShadow,
    drawerWidth
} from "assets/jss/material-dashboard-pro-react.jsx";

const headerStyle = theme => ({
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "10px",
        zIndex: "1029",
        color: "#555555",
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
    },
    absolute: {
        position: "absolute"
    },
    fixed: {
        position: "fixed"
    },
    container: {
        ...container,
        minHeight: "50px"
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover,&:focus": {
            background: "transparent",
            color: "#FFFFFF"
        }
    },
    appResponsive: {
        margin: "20px 10px"
        // width: drawerWidth,
    },
    primary: {
        backgroundColor: primaryColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
    },
    info: {
        backgroundColor: infoColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
    },
    success: {
        backgroundColor: successColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
    },
    warning: {
        backgroundColor: warningColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
    },
    danger: {
        backgroundColor: dangerColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
    },
    rose: {
        backgroundColor: roseColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF"
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121 !important",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },

    list: {
        ...defaultFont,
        fontSize: "14px",
        margin: 0,
        marginRight: "-15px",
        paddingLeft: "0",
        listStyle: "none",
        color: "#FFFFFF",
        paddingTop: "0",
        paddingBottom: "0"
    },
    listItem: {
        float: "left",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            zIndex: "999",
            width: "100%",
            paddingRight: "15px"
        }
    },
    navLink: {
        color: "#FFFFFF",
        margin: "0 5px",
        paddingTop: "15px",
        paddingBottom: "15px",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        textDecoration: "none",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            background: "rgba(200, 200, 200, 0.2)"
        }
    },
    listItemIcon: {
        marginTop: "-3px",
        top: "0px",
        position: "relative",
        marginRight: "3px",
        width: "20px",
        height: "20px",
        verticalAlign: "middle",
        color: "inherit",
        display: "inline-block"
    },
    listItemText: {
        flex: "none",
        padding: "0",
        minWidth: "0",
        margin: 0,
        display: "inline-block",
        position: "relative",
        whiteSpace: "nowrap"
    },
    navLinkActive: {
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        ...boxShadow,
        width: drawerWidth,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        left: "auto",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        ...transition,
        "&:before,&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            top: "0"
        },
        "&:after": {
            background: "#000",
            opacity: ".8"
        }
    },
    sidebarButton: {
        color: "#FFFFFF",
        top: "8px"
    },

});

export default headerStyle;
