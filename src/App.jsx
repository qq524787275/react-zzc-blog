import React, {Component} from 'react';

import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "./assets/scss/material-dashboard-pro-react.css?v=1.1.0";

import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from 'components/Snackbar/Snackbar.jsx';

import {observer} from "mobx-react";

import ActionMesage from "./action/ActionMessage"


const hist = createBrowserHistory();

@observer
class App extends Component {



    dataManager = ActionMesage.getInstance();

    render() {
        //const { } = this.state;
        return (
            <Router history={hist}>
                <div>
                    <Snackbar
                        place={"bc"}
                        message={this.dataManager.data.msg}
                        color={this.dataManager.data.color}
                        icon={AddAlert}
                        close
                        closeNotification={() => this.dataManager.hideMessgae()}
                        open={this.dataManager.data.isShow}></Snackbar>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            // if(prop.path=="/admin/login" && localStorage.getItem("token")!==""){
                            //     return <Redirect from={prop.path} to={"/admin/home"} key={key}/>;
                            // }
                            return <Route path={prop.path} component={prop.component} key={key}/>;
                        })}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
