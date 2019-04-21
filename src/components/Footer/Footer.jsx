import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import footerStyle from "assets/jss/material-dashboard-pro-react/components/footerStyle";

import github from "assets/img/github.png";

function Footer({...props}) {
    const {classes, fluid, white} = props;
    var container = cx({
        [classes.container]: !fluid,
        [classes.containerFluid]: fluid,
        [classes.whiteColor]: white
    });
    // var anchor =
    //     classes.a +
    //     cx({
    //         [" " + classes.whiteColor]: white
    //     });
    var block = cx({
        [classes.block]: true,
        [classes.whiteColor]: white
    })
    return (
        <footer className={classes.footer}>
            <div className={container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <img src={github} alt="logo" style={{display:"inline",width:25,height:25}}/>
                            <a href="https://github.com/qq524787275" className={block} style={{display:"inline",margin:0,padding:10,textTransform:"capitalize"}}>
                                {"github"}
                            </a>
                        </ListItem>
                    </List>
                </div>
                <p className={classes.right}>
                    &copy; 2018-5-15 zzc
                </p>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    fluid: PropTypes.bool,
    white: PropTypes.bool,
    rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
