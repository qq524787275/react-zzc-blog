import React from 'react';
import {withStyles} from 'material-ui/styles';
import cx from "classnames";
import {Switch, Route, Redirect} from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
// core components
import Header from "components/Header/Header.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo.svg";


// 登录验证
function requireAuth(Layout, props) {
    if (localStorage.getItem("token")===null) { // 未登录
        return <Redirect to="/admin/login" />;
    } else {
        return <Layout {...props} />
    }
}

const switchRoutes = (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key}/>
            if (prop.collapse)
                return prop.views.map((prop, key) => {
                    return (
                        <Route  path={prop.path} component={props => requireAuth(prop.component, props)} key={key}/>
                    );
                });
            return <Route  path={prop.path} component={props => requireAuth(prop.component, props)} key={key}/>
        })}
    </Switch>
);

var ps;

class Dashboard extends React.Component {
    state = {
        mobileOpen: false,
        miniActive: false
    };



    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    getRoute() {
        return this.props.location.pathname !== "/maps/full-screen-maps";
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            // eslint-disable-next-line
            ps = new PerfectScrollbar(this.refs.mainPanel, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    sidebarMinimize() {
        this.setState({miniActive: !this.state.miniActive});
    }

    render() {
        const {classes, ...rest} = this.props;
        const mainPanel =
            classes.mainPanel +
            " " +
            cx({
                [classes.mainPanelSidebarMini]: this.state.miniActive,
                [classes.mainPanelWithPerfectScrollbar]:
                navigator.platform.indexOf("Win") > -1
            });
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    rtlActive={false}
                    routes={dashboardRoutes}
                    logoText={"ZhuZiChu'Blog"}
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    bgColor="black"
                    miniActive={this.state.miniActive}
                    {...rest}
                />
                <div className={mainPanel} ref="mainPanel">
                    <Header
                        sidebarMinimize={this.sidebarMinimize.bind(this)}
                        miniActive={this.state.miniActive}
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {this.getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )}
                </div>
            </div>
        );
    }
}


export default withStyles(appStyle)(Dashboard);
