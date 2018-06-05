import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';


import HeaderCard from "components/Cards/HeaderCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Editor from 'components/Editor/Editor';

import {CircularProgress} from 'material-ui/Progress';

import {pushArticle} from "http/okgo";
import OnToastEvent from "action/OnToastEvent";
import RxBus from "uitls/RxBus";

const styles = {
    root: {},
    editor: {
        height: 250,
        border: "1px solid #efefef",
    },
    header: {
        "&:hover": {
            fontWeight: "bold",
        }
    }
};

class ArticlePulish extends Component {

    constructor(props, context) {
        super(props, context);
        this.content = "";
    }

    state = {
        title: "",
        description: "",
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

    loadPushArticle = async (title, decription, content) => {
        try {
            let result = await pushArticle(title, decription, content);
            if (result === null || result.status === -1) {
                RxBus.getInstance().post(new OnToastEvent(result.msg, "danger"));
                console.debug("数据请求失败");
            } else {
                RxBus.getInstance().post(new OnToastEvent(result.msg, "success"));
                this.setState({
                    ...this.state,
                    title: "",
                });
            }
        } catch (e) {
            console.debug(e);
            RxBus.getInstance().post(new OnToastEvent("网络异常", "danger"));
        } finally {
            this.setState({
                isSubmitting: false,
            })
        }

    }


    submit = () => {
        console.debug(this.state.title);
        console.debug(this.state.description);
        console.debug(this.content);
        this.loadPushArticle(this.state.title, this.state.description, this.content);
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    onChange = (content) => {
        this.content = content;
    }

    go = () => {

    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <GridContainer justify={"center"}>
                    <ItemGrid xs={10}>
                        <HeaderCard
                            cardTitle={<div className={classes.header} onClick={this.go}>填写文章信息</div>}
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
                                    <ItemGrid xs={12} style={{marginBottom: 20}}>
                                        <CustomInput
                                            id={"description"}
                                            labelText={"描述"}
                                            inputProps={{
                                                value: this.state.description,
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
                                        <Editor onChange={this.onChange}/>
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
