// ##############################
// // // App styles
// #############################

import {
   container,
} from "../../material-dashboard-pro-react.jsx";

import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.jsx";

const guestBookStyle = theme => ({
    content: {
        paddingTop: "18vh",
        minHeight: "calc(100vh - 80px)",
        position: "relative",
        zIndex: "4"
    },
    container,
    fab:{
        zIndex:5,
        position:"fixed",
        right:0,
        bottom:0,
        margin:50
    },
    ...buttonStyle
});

export default guestBookStyle;
