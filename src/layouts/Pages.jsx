import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import {Switch, Route, Redirect} from "react-router-dom";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import pagesRoutes from "routes/pages.jsx";

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
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div>
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

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(pagesStyle)(Index);
