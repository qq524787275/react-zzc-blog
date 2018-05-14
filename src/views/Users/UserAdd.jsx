import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import HeaderCard from "components/Cards/HeaderCard.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

import Button from "components/CustomButtons/Button.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

import {addUser} from "http/okgo";
import ActionMessage from "../../action/ActionMessage";

class UserAdd extends Component {
    state = {
        username:"",
        password:""
    };

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

    submit=async ()=>{
        let result=await addUser(this.state.username,this.state.password);
        if(result.status==1){
            ActionMessage.getInstance().showMessage(result.msg,"success");
        }else {
            ActionMessage.getInstance().showMessage(result.msg,"danger");
        }

        console.debug(result);
    }

    handleChange=event=>{
        this.setState({
            ...this.state,
            [event.target.id]:event.target.value
        })
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <HeaderCard
                    cardTitle={"新增管理员用户"}
                    headerColor={"rose"}
                    content={
                        <form>
                            <GridContainer direction={"column"}>
                                <ItemGrid xs={6} style={{marginLeft: "10%"}}>
                                    <CustomInput
                                        labelText="用户名"
                                        id="username"
                                        inputProps={{
                                            value:this.state.username,
                                            onChange:this.handleChange
                                        }}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </ItemGrid>
                                <ItemGrid xs={6} style={{marginLeft: "10%"}}>
                                    <CustomInput
                                        labelText="密码"
                                        id="password"
                                        inputProps={{
                                            value:this.state.password,
                                            onChange:this.handleChange
                                        }}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </ItemGrid>
                            </GridContainer>

                            <GridContainer justify="flex-end">
                                <ItemGrid xs={12} sm={3} md={3}>
                                    <Button color="rose" onClick={this.submit}>确认</Button>
                                </ItemGrid>
                            </GridContainer>

                        </form>
                    }></HeaderCard>
            </div>
        );
    }
}

export default withStyles(regularFormsStyle)(UserAdd);
