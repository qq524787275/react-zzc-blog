import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Typography from 'material-ui/Typography';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItemText from "material-ui/List/ListItemText";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Menu from "@material-ui/icons/Menu";

import pagesRoutes from "routes/pages.jsx";

import fixedHeaderStyle from "assets/jss/material-dashboard-pro-react/components/fixedHeaderStyle.jsx";

class FixedHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.headerColorChange = this.headerColorChange.bind(this);
    }
    handleDrawerToggle() {
        this.setState({ open: !this.state.open });
    }
    componentDidMount() {
        if (this.props.changeColorOnScroll) {
            window.addEventListener("scroll", this.headerColorChange);
        }
    }
    headerColorChange() {
        const { classes, color, changeColorOnScroll } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    }
    componentWillUnmount() {
        if (this.props.changeColorOnScroll) {
            window.removeEventListener("scroll", this.headerColorChange);
        }
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    render() {
        const {
            classes,
            color,
            fixed,
            absolute
        } = this.props;

        const appBarClasses = cx({
            [classes[color]]: color,
            [classes.absolute]: absolute,
            [classes.fixed]: fixed,
            [classes.appBar]: true,
        });

        var list = (
            <List className={classes.list}>

                {pagesRoutes.map((prop, key) => {
                    if (prop.redirect) {
                        return null;
                    }
                    const navLink =
                        classes.navLink +
                        cx({
                            [" " + classes.navLinkActive]: this.activeRoute(prop.path)
                        });
                    return (
                        <ListItem key={key} className={classes.listItem}>
                            <NavLink to={prop.path} className={navLink}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <prop.icon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={prop.short}
                                    disableTypography={true}
                                    className={classes.listItemText}
                                />
                            </NavLink>
                        </ListItem>
                    );
                })}
                <ListItem className={classes.listItem}>
                    <NavLink to={"/admin"} className={classes.navLink}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText
                            primary={"后台管理"}
                            disableTypography={true}
                            className={classes.listItemText}
                        />
                    </NavLink>
                </ListItem>
            </List>
        );
        return (
            <AppBar position="static" className={classes.appBar+appBarClasses}>
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                        <Button href="/index" className={classes.title}>
                            <Typography style={{color:"#ffffff",fontSize:"1.2em",fontStyle:"oblique",fontWeight:"bold"}}>
                                朱子楚的博客
                            </Typography>
                        </Button>
                    </div>
                    <Hidden smDown implementation="css">
                        {list}
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            className={classes.sidebarButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={"right"}
                                open={this.state.open}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                onClose={this.handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true // Better open performance on mobile.
                                }}
                            >
                                {list}
                            </Drawer>
                        </Hidden>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

FixedHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    // this will cause the sidebar to change the color from
    // this.props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to
    // this.props.color (see above)
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};

export default withStyles(fixedHeaderStyle)(FixedHeader);
