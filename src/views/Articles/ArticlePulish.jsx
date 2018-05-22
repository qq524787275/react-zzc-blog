import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';


import HeaderCard from "components/Cards/HeaderCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Editor from 'components/Editor/Editor';
import ActionMesage from "action/ActionMessage"

import {CircularProgress} from 'material-ui/Progress';

import {pushArticle} from "../../http/okgo";
import ActionMessage from "../../action/ActionMessage";

const styles = {
    root: {},
    editor: {
        height: 250,
        border: "1px solid #efefef",
    },
    wrapper: {}
};

class ArticlePulish extends Component {

    a = ActionMesage.getInstance();

    state = {
        title:"",
        content:""
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

    loadPushArticle=async(title,content)=>{
        try {
            let result = await pushArticle(title, content);
            if(result===null || result.status===-1){
                ActionMessage.getInstance().showMessage(result.msg,"danger");
                console.debug("数据请求失败");
            }else{
                ActionMesage.getInstance().showMessage(result.msg,"success");
                this.setState({
                    ...this.state,
                    title: "",
                });
            }
        }catch (e){
            console.debug(e);
            ActionMesage.getInstance().showMessage("网络异常");
        }finally {
            this.setState({
                isSubmitting: false,
            })
        }

    }



    submit = () => {
        console.debug(this.state.content);
    }

    handleChange=event=>{
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    onChange=(a)=>{
        console.debug(a);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <GridContainer justify={"center"}>
                    <ItemGrid xs={10}>
                        <HeaderCard
                            cardTitle={"填写文章信息"}
                            headerColor={"rose"}
                            content={
                                <GridContainer>
                                    <ItemGrid xs={12} style={{marginBottom: 20}}>
                                        <CustomInput
                                            id={"title"}
                                            labelText={"标题"}
                                            inputProps={{
                                                value: this.state.title,
                                                onChange: this.handleChange,
                                            }}
                                            formControlProps={
                                                {
                                                    fullWidth: true,
                                                }
                                            }
                                        >
                                        </CustomInput>
                                    </ItemGrid>
                                    <ItemGrid xs={12}>
                                        <Editor onChange={this.onChange} init={<p>什么鬼哦</p>}/>
                                    </ItemGrid>
                                    <GridContainer justify={"center"}>
                                        <ItemGrid>
                                            {
                                                this.state.isSubmitting
                                                    ? <CircularProgress color={"secondary"}
                                                                        style={{marginTop: 15}}></CircularProgress>
                                                    : <Button color={"rose"} onClick={this.submit}>提交</Button>
                                            }
                                        </ItemGrid>
                                    </GridContainer>
                                </GridContainer>
                            }>
                        </HeaderCard>
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(styles)(ArticlePulish);
