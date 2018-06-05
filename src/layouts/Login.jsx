import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import LoginCard from "components/Cards/LoginCard.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import bgImage from "assets/img/register.jpeg";
import {CircularProgress} from 'material-ui/Progress';

import {withRouter} from "react-router-dom";

import {login as okLogin} from 'http/okgo';

import OnToastEvent from "../action/OnToastEvent";
import RxBus from "../uitls/RxBus";

class Login extends Component {
    state = {
        alert: null,
        cardAnimaton: "cardHidden",
        username: "zhuzichu",
        password: "admin",
        isLoading: false,
        showMessage: false,
        msg: "",
    };


    componentWillMount() {

    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({cardAnimaton: ""});
            }.bind(this),
            400
        );
    }


    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    login = async (username, password) => {
        try {
            let result = await okLogin(username, password);
            if (result === null || result.status === -1) {
                RxBus.getInstance().post(new OnToastEvent(result.msg,"danger"));
            } else if (result !== null && result.status === 1) {
                localStorage.setItem("token", result.result);
                window.location.replace("/admin/home");
                return;
            }
        }
        catch (e) {
            RxBus.getInstance().post(new OnToastEvent("服务器异常","danger"));
        }
        this.setState({
            isLoading: false
        });
    }

    submit = () => {
        this.setState({
            isLoading: true
        });
        this.login(this.state.username, this.state.password);
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.wrapper} ref="wrapper">
                <div className={classes.fullPage}>
                    <div className={classes.content}>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <ItemGrid xs={12} sm={6} md={4}>
                                    <form>
                                        <LoginCard
                                            customCardClass={classes[this.state.cardAnimaton]}
                                            headerColor="rose"
                                            cardTitle="管理后台"
                                            cardSubtitle="zhuzichu'blog"
                                            footerAlign="center"
                                            footer={
                                                this.state.isLoading ?
                                                    <CircularProgress color={"secondary"}></CircularProgress> :
                                                    <Button color="roseNoBackground" wd size="lg" onClick={this.submit}>
                                                        确认
                                                    </Button>
                                            }

                                            content={
                                                <div>

                                                    <CustomInput
                                                        labelText="账号"
                                                        id="username"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            value: this.state.username,
                                                            onChange: this.handleChange,
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Person className={classes.inputAdornmentIcon}/>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                    <CustomInput
                                                        labelText="密码"
                                                        id="password"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: "password",
                                                            value: this.state.password,
                                                            onChange: this.handleChange,
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <LockOutline
                                                                        className={classes.inputAdornmentIcon}
                                                                    />
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                </div>
                                            }
                                        />
                                    </form>
                                </ItemGrid>
                            </GridContainer>
                        </div>
                    </div>
                    <div
                        className={classes.fullPageBackground}
                        style={{backgroundImage: "url(" + bgImage + ")"}}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(loginPageStyle)(Login));
