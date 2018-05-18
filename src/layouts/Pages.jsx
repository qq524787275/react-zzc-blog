import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {Switch, Route, Redirect} from "react-router-dom";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import pagesRoutes from "routes/pages.jsx";
import FixedHeader from "components/Header/FixedHeader.jsx";
import bgImage from "assets/img/image-mingren.jpg";
import Footer from "components/Footer/Footer.jsx";
class Index extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {classes,...rest} = this.props;
        //const { } = this.state;
        return (
            <div>
                <FixedHeader
                    color="transparent"
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "dark"
                    }}
                    {...rest}  />
                <div className={classes.wrapper} ref="wrapper">
                    <div className={classes.fullPage}>
                        <Switch>
                            {pagesRoutes.map((prop, key) => {
                                if (prop.collapse) {
                                    return null;
                                }
                                if (prop.redirect) {
                                    return (
                                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                    );
                                }
                                return (
                                    <Route
                                        path={prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            })}
                        </Switch>
                        <Footer white />
                        <div
                            className={classes.fullPageBackground}
                            style={{ backgroundImage: "url(" + bgImage + ")" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(pagesStyle)(Index);
