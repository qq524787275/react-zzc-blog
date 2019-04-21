import React, {Component} from 'react';

import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "./assets/scss/material-dashboard-pro-react.css?v=1.1.0";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from 'components/Snackbar/Snackbar.jsx';
import RxBus from "./uitls/RxBus";
import OnToastEvent from "./action/OnToastEvent";
import {CircularProgress} from 'material-ui/Progress';

const hist = createBrowserHistory();

//babel-plugin-transform-decorators-legacy
class App extends Component {
    state = {
        msg: "",
        isShow: false,
        color: "info"
    };

    componentWillMount() {
        this.setOnToastEventListener();
    }

    //监听全局Toast事件 @see OnToastEvent
    setOnToastEventListener = () => {
        this.subscription = RxBus.getInstance()
            .to(OnToastEvent.name)
            .subscribe(data => {
                if (!this.state.isShow) {
                    this.setState({
                        ...this.state,
                        msg: data.msg,
                        color: data.color,
                        isShow: true
                    }, () => {
                        setTimeout(
                            () => {
                                this.setState({
                                    ...this.state,
                                    isShow: false
                                })
                            },
                            1000
                        );
                    })
                }
            })
    }

    componentWillUnmount() {
        this.subscription.dispose();
    }

    /**
     *
     * @returns {*}
     */
    render() {
        //const { } = this.state;
        return (
            <Router history={hist}>
                <React.Suspense
                    fallback={
                        <div style={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#333"
                        }}>
                            <CircularProgress style={{color: "#fff"}}/>
                        </div>
                    }>
                    <div>
                        <Snackbar
                            place={"bc"}
                            message={this.state.msg}
                            color={this.state.color}
                            icon={AddAlert}
                            close
                            closeNotification={() => {
                                this.setState({...this.state, isShow: false,})
                            }}
                            open={this.state.isShow}/>

                        <Switch>
                            {indexRoutes.map((prop, key) => {
                                return <Route path={prop.path} component={prop.component} key={key}/>;
                            })}
                        </Switch>
                    </div>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;
