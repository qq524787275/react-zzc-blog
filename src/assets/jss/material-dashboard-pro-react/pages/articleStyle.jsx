// ##############################
// // // App styles
// #############################

import {
    container
} from "assets/jss/material-dashboard-pro-react.jsx";

const appStyle = theme => ({
    content: {
        paddingTop: "18vh",
        minHeight: "calc(100vh - 80px)",
        position: "relative",
        zIndex: "4",
        marginBottom:240
    },
    container,
    love: {
        "&:hover": {
            backgroundColor:"red"
        }
    }

});

export default appStyle;
