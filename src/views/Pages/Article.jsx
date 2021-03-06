import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import articleStyle from "assets/jss/material-dashboard-pro-react/pages/articleStyle.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import ReactList from 'react-list';
import {CircularProgress} from 'material-ui/Progress';
import InfiniteScroll from 'react-infinite-scroller';
import Favorite from '@material-ui/icons/Favorite';
import {getArticleVisibelList} from '../../http/okgo';
import {timestampToTime} from '../../uitls/ProjectDateUtils';
import Quote from "components/Typography/Quote.jsx";
import IconEye from '@material-ui/icons/RemoveRedEye';
import ButtonBase from 'material-ui/ButtonBase';

class Article extends Component {

    constructor(props, context) {
        super(props, context);
        this.size = 10;
        this.page = 1;
    }

    state = {
        list: [],
        loading: false,
        hasMore: true,
    };

    componentWillMount() {

    }

    componentDidMount() {
        this.loadAricleList(this.page, this.size);
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    loadAricleList = async (page, size) => {
        try {
            let response = await getArticleVisibelList(page, size);
            if (response.result.lastPage < page) {
                this.setState({
                    ...this.state, hasMore: false
                })
                return;
            } else if (response.result.lastPage === 1) {
                this.setState({
                    ...this.state,
                    hasMore: false,
                    list: [...this.state.list, ...response.result.list]
                })
                return;
            }
            this.setState({
                ...this.state,
                list: [...this.state.list, ...response.result.list],
            })
        } catch (e) {
        }
    }

    loadMore = (page) => {
        this.loadAricleList(page, this.size);
    }

    renderItem = (index, key) => {
        return (
            <div style={{cursor: "pointer", margin: 30}} key={index} onClick={() => {
                window.open("/article/detail/" + this.state.list[index].id);
                // this.props.history.location.open("/article/detail/"+);
            }}>
                <IconCard iconColor={"rose"} icon={Favorite} content={
                    <div style={{minHeight: 150}}>
                        <h3
                            style={{color: "#333333"}}>{this.state.list[index].title}</h3>
                        <Quote style={{marginTop: 20}}
                               text={this.state.list[index].description}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: "0px",
                            right: "0px",
                            marginRight: 20,
                            marginBottom: 10,
                            color: "#000",
                        }}>
                            <div style={{display: "inline", marginRight: 50, color: "#666666"}}>
                                <IconEye style={{
                                    color: "#999999",
                                    width: "16px",
                                    height: "16px",
                                    top: "2px",
                                    position: "relative"
                                }}/>
                                {" "}
                                {this.state.list[index].eyes}
                            </div>
                            <div style={{
                                display: "inline",
                                fontWeight: "bold",
                                color: "#666666"
                            }}>{timestampToTime(this.state.list[index].date)}</div>
                        </div>
                    </div>
                }/>
            </div>
        );
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.content}>
                <div className={classes.container}>
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        hasMore={!this.state.loading && this.state.hasMore}
                        loader={<div key={-1} style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <CircularProgress style={{color: "#fff"}} />
                        </div>}
                        useWindow={true}
                        loadMore={this.loadMore}>
                        <ReactList
                            axis='y'
                            itemRenderer={this.renderItem}
                            length={this.state.list.length}
                            type='uniform'>
                        </ReactList>
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default withStyles(articleStyle)(Article);
