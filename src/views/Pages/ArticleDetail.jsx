import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {getArticleVisibleDetail} from "../../http/okgo";
import articleDetailStyle from "assets/jss/material-dashboard-pro-react/pages/articleDetailStyle.jsx";
import bgImage from "assets/img/image-mingren.jpg";
import FullHeaderCard from "components/Cards/FullHeaderCard.jsx";
import {Fade} from 'material-ui/transitions';
import Button from 'material-ui/Button';

class ArticleDetail extends Component {

    constructor(props, context) {
        super(props, context);
        this.id = 0;
    }

    state = {
        card: null,
    };

    componentWillMount() {
        let arr = this.props.history.location.pathname.split("/");
        this.id = arr[arr.length - 1]
    }

    componentDidMount() {
        this.loadGetArticleDetial(this.id);
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    loadGetArticleDetial = async (id) => {
        let response = await getArticleVisibleDetail(id);
        if (response.status !== 1) {
            this.props.history.replace("/article");
            return;
        }

        this.setState({
            ...this.state,
            card: (
                <Fade in={true} timeout={{enter: 500, exit: 500}}>
                    <div style={{width: "70vw", marginLeft: "15vw", marginTop: "10vh"}}>
                        <FullHeaderCard cardTitle={<div
                            style={{
                                textAlign: "center",
                                fontSize: "1.5em",
                                fontWeight: "bold"
                            }}>{response.result.title}</div>}
                                        headerColor={"green"}
                                        content={<div style={{minHeight: "60vh"}}>
                                            <div dangerouslySetInnerHTML={{__html: response.result.content}}>
                                            </div>
                                        </div>}></FullHeaderCard>
                    </div>
                </Fade>
            ),
        })
        console.debug(response);
    }

    click=()=>{
        console.debug(this.props.history.push("/index"));
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.wrapper}>
                <div className={classes.fullPage}></div>
                <Button onClick={this.click} style={{color:"#fff",zIndex:100,position :"fixed"}}>首页</Button>
                <div className={classes.content}>
                    {this.state.card}
                </div>
                <div
                    className={classes.fullPageBackground}
                    style={{backgroundImage: "url(" + bgImage + ")"}}
                />
            </div>
        );
    }
}

export default withStyles(articleDetailStyle)(ArticleDetail);
