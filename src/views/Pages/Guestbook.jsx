import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import guestBookStyle from "assets/jss/material-dashboard-pro-react/pages/guestBookStyle.jsx";
import IconCard from "components/Cards/IconCard";

import ItemGrid from "../../components/Grid/ItemGrid";

import Favorite from "@material-ui/icons/Favorite";

import {Grow} from 'material-ui/transitions';

import IconButton from "components/CustomButtons/IconButton.jsx";
import EditIcon from "@material-ui/icons/Edit";

import Masonry from 'react-masonry-component';

import SweetAlert from 'react-bootstrap-sweetalert';

import CustomInput from "components/CustomInput/CustomInput.jsx";

import {guestbookList, addGuestbook} from "http/okgo";
import ActionMessage from "../../action/ActionMessage";

import ReactPaginate from 'react-paginate';

import Paper from 'material-ui/Paper';

import {timestampToTime} from '../../uitls/ProjectDateUtils';
class Guestbook extends Component {


    constructor(props, context) {
        super(props, context);
        this.page = 1;
        this.size = 12;
        this.param = {
            nickname: null,
            content: null,
        };
    }

    state = {
        alert: null,
        result: null,
        paginate:null
    };

    componentWillMount() {

    }

    componentDidMount() {
        this.loadGuestbookList(this.page, this.size);
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    loadGuestbookList = async (page, size) => {
        this.setState({
            ...this.state,
            result: null,
            paginate:null
        })

        let response = await guestbookList(page, size);
        this.setState({
            ...this.state,
            result: response.result,
            paginate:(
                <Grow
                    style={{transitionDelay: (response.result.list.length) * 100}} in={true}
                    timeout={{enter: 500, exit: 0}}>
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <Paper style={{display: "inline", padding: 15}}>
                            <ReactPaginate previousLabel={"上一页"}
                                           nextLabel={"下一页"}
                                           breakLabel={<a href="">...</a>}
                                           breakClassName={"break"}
                                           forcePage={response.result.prePage}
                                           pageCount={response.result.pages}
                                           marginPagesDisplayed={1}
                                           pageRangeDisplayed={3}
                                           onPageChange={this.handlePageClick}
                                           containerClassName={"react-paginate"}
                                           activeClassName={"active"}/>
                        </Paper>
                    </div>
                </Grow>
            ),
            alert: null,
        })
        console.debug(response);
    }

    loadAddGuestbook = async (nickname, content) => {
        let response = await addGuestbook(nickname, content);
        if (response.status === 1) {
            this.successAdd();
            this.param = {
                nickname: null,
                content: null,
            };
        } else {
            ActionMessage.getInstance().showMessage(response.msg, "danger")
        }
        console.debug(response);
    }

    clickEdit = () => {
        console.debug("点击了");
        this.inputAlert();
    }

    inputConfirmAlert = () => {
        this.loadAddGuestbook(this.param.nickname, this.param.content);
    }

    handleChange = e => {
        this.param = {
            ...this.param,
            [e.target.id]: e.target.value
        }
    }

    inputAlert = () => {
        this.setState({
            alert: (
                <SweetAlert
                    showCancel
                    style={{display: "block", marginTop: "-100px"}}
                    title="留言"
                    confirmBtnText={"确认"}
                    cancelBtnText={"取消"}
                    onConfirm={e => this.inputConfirmAlert(e)}
                    onCancel={() => this.setState({alert: null})}
                    confirmBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.info
                    }
                    cancelBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.danger
                    }
                >
                    <form>
                        <CustomInput
                            labelText="昵称"
                            id="nickname"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: this.handleChange
                            }}
                        />
                        <CustomInput
                            labelText="内容"
                            id="content"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: this.handleChange
                            }}
                        />
                    </form>
                </SweetAlert>
            )
        });
    }

    successAdd() {
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{display: "block", marginTop: "-100px"}}
                    title="留言成功!"
                    onConfirm={() => {
                        this.page = 1;
                        this.loadGuestbookList(this.page, this.size);
                    }}
                    onCancel={() => {
                        this.page = 1;
                        this.loadGuestbookList(this.page, this.size);
                    }}
                    confirmBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.success
                    }
                >
                    亲！你的留言已经展示到页面上了.
                </SweetAlert>
            )
        });
    }

    handlePageClick = (a) => {
        this.loadGuestbookList(a.selected + 1, this.size);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        const color = [
            "orange",
            "green",
            "red",
            "blue",
            "purple",
            "rose"
        ];

        return (
            <div className={classes.content}>
                <div className={classes.fab}>
                    <IconButton color="primary" onClick={this.clickEdit}>
                        <EditIcon/>
                    </IconButton>
                </div>
                <div className={classes.container}>
                    <Masonry>
                        {
                            this.state.result !== null ? this.state.result.list.map((item, key) => {
                                let h = Math.floor(Math.random() * 120 + 60);
                                return (
                                    <div key={key}>
                                        <Grow style={{transitionDelay: key * 100}} in={true}
                                              timeout={{enter: 500, exit: 0}}>
                                            <ItemGrid>
                                                <IconCard
                                                    iconColor={color[Math.floor(Math.random() * 6 + 0)]}
                                                    title={item.nickname}
                                                    icon={Favorite}
                                                    content={
                                                        <div
                                                            style={{height: h, width: 210}}>
                                                            <p>{item.content}</p>
                                                            <div style={{position:"absolute",bottom:"0px",right:"0px",margin:10,color:"#000",fontStyle:"italic"}}>{timestampToTime(item.date)}</div>
                                                        </div>
                                                    }>

                                                </IconCard>
                                            </ItemGrid>
                                        </Grow>
                                    </div>
                                );
                            }) : null
                        }
                    </Masonry>
                    {
                        this.state.paginate
                    }
                </div>
                {
                    this.state.alert
                }
            </div>
        );
    }
}

export default withStyles(guestBookStyle)(Guestbook);
