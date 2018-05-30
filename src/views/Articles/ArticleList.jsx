import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import articleListStyle from "assets/jss/material-dashboard-pro-react/views/articleListStyle.jsx";

import IconCard from "components/Cards/IconCard.jsx";
import Table from "components/Table/Table.jsx";
import Assignment from "@material-ui/icons/Assignment";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close"
import Button from "components/CustomButtons/Button.jsx";
import HeaderCard from "components/Cards/HeaderCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomInput from 'components/CustomInput/CustomInput';
import Editor from 'components/Editor/Editor';
import {CircularProgress} from 'material-ui/Progress';
import {getArticleList, getArticleDetial,setArticleVisible,upDateArticle} from '../../http/okgo';
import {timestampToTime} from '../../uitls/ProjectDateUtils';
import ReactPaginate from 'react-paginate';
import {Fade} from 'material-ui/transitions';

import Switch from "material-ui/Switch";
import {observer} from "mobx-react";
import ActionMessage from "../../action/ActionMessage";

@observer
class ArticleList extends Component {

    constructor(props, context) {
        super(props, context);
        this.page = 1;
        this.size = 5;
        this.data={}
    }

    state = {
        result: {},
        paginate: null,
        update: null,
    };


    componentWillMount() {

    }

    componentDidMount() {
        this.loadGetArticleList(this.page, this.size);
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    handleChange=(event)=>{

        this.data={
            ...this.data,
            [event.target.id]: event.target.value
        }
        console.debug(this.data);
    }

    onChange=(content)=>{
        this.data.content=content;
        console.debug(this.data.content);
    }

    submit=()=>{
        this.loadUpdateArticle(this.data);
    }

    loadArticleVisible =async(id,visible)=>{
       let response= await setArticleVisible(id,visible);
       if(response.status===1){
           this.loadGetArticleList(this.page, this.size);
       }else{
           ActionMessage.getInstance().showMessage(response.msg,"danger");
       }
    }

    loadUpdateArticle= async(data)=>{
        let response= await upDateArticle(data);
        if(response.status===1){
            ActionMessage.getInstance().showMessage("修改成功!~","success");
        }else{
            ActionMessage.getInstance().showMessage(response.msg,"danger");
        }
    }

    loadArticleDetail = async (item) => {
        this.setState({
            ...this.state,
            update:null
        },async()=> {

            let response = await getArticleDetial(item.id);
            this.data=response.result
            this.setState({
                ...this.state,
                update: (
                    <Fade in={true} timeout={{enter: 500, exit: 500}}>
                        <div>
                            <HeaderCard
                                cardTitle={<div className={this.props.classes.header}>修改id为{this.data.id}的文章信息</div>}
                                headerColor={"rose"}
                                content={
                                    <GridContainer>
                                        <ItemGrid xs={12} style={{marginBottom: 20}}>
                                            <CustomInput
                                                id={"title"}
                                                labelText={"标题"}
                                                inputProps={{
                                                    defaultValue: this.data.title,
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
                                                    defaultValue: this.data.description,
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
                                            <Editor onChange={this.onChange} init={this.data.content}/>
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
                        </div>
                    </Fade>
                )
            })

        })
    }


    handlePageClick = (a) => {
        this.page=a.selected + 1;
        this.loadGetArticleList(this.page, this.size);
    }

    loadGetArticleList = async (page, size) => {
        let response = await getArticleList(page, size);
        this.setState({
            ...this.state,
            result: response.result,
            paginate: (
                <ReactPaginate previousLabel={"上一页"}
                               nextLabel={"下一页"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break"}
                               pageCount={response.result.pages}
                               marginPagesDisplayed={1}
                               pageRangeDisplayed={3}
                               onPageChange={this.handlePageClick}
                               containerClassName={"react-paginate"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
            )
        })
        console.debug(response);
    }


    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <IconCard
                    icon={Assignment}
                    title={"文章"}
                    footer={
                        this.state.paginate
                    }
                    content={
                        <div>
                            <Table
                                hover
                                tableHead={[
                                    "Id",
                                    "Title",
                                    "Description",
                                    "Date",
                                    "Love",
                                    "Visible",
                                    "Actions"
                                ]}
                                tableData={
                                    this.state.result.list !== undefined ? this.state.result.list.map((item, key) => {
                                        return [
                                            item.id,
                                            item.title,
                                            item.description,
                                            timestampToTime(item.date),
                                            item.love,
                                            <Switch key={"switch"} checked={item.visible} onChange={()=>{
                                                console.debug(item);
                                                this.loadArticleVisible(item.id,item.visible===true?0:1);
                                            }}/>,
                                            [
                                                <Button color={"success"} customClass={classes.actionButton}
                                                        key={"edit"} onClick={() => {
                                                    this.loadArticleDetail(item)
                                                }}>
                                                    <Edit className={classes.icon}/>
                                                </Button>
                                                ,
                                                <Button color={"danger"} customClass={classes.actionButton}
                                                        key={"close"} onClick={() => {
                                                    ActionMessage.getInstance().showMessage("不支持删除","danger");
                                                }}>
                                                    <Close className={classes.icon}/>
                                                </Button>
                                            ]
                                        ]
                                    }) : []
                                }>
                            </Table>
                        </div>
                    }></IconCard>
                {
                    this.state.update
                }
            </div>
        );
    }
}

export default withStyles(articleListStyle)(ArticleList);
