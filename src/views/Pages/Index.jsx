import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import 'wangeditor/release/wangEditor.css'
import indexStyle from "assets/jss/material-dashboard-pro-react/pages/indexStyle.jsx";
// @material-ui/icons
import AddLocation from "@material-ui/icons/AddLocation";
import ItemGrid from "components/Grid/ItemGrid";
import GridContainer from "components/Grid/GridContainer";
// core components
import IconCard from "components/Cards/IconCard.jsx";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import OnToastEvent from "../../action/OnToastEvent";
import RxBus from "../../uitls/RxBus";

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 39.9332495, lng: 116.3705649}}
            defaultOptions={{
                scrollwheel: true
            }}
        >
            <Marker position={{lat: 39.9332495, lng: 116.3705649}}/>
        </GoogleMap>
    ))
);

class Index extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {
        this.initWebSocket();
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.websocket.close();
    }

    initWebSocket = () => {
        this.websocket = null;
        if ('WebSocket' in window) {
            this.websocket = new WebSocket("ws://localhost:8012/websocket");
        } else {
            alert("不支持websocket");
            return;
        }
        //连接发生错误的回调方法
        this.websocket.onerror = () => {
            console.debug("websocket发生错误");
        };
        this.websocket.onclose = () => {
            console.debug("websocket关闭连接");
        }
        this.websocket.onopen = () => {
            console.debug("websocket建立连接成功!")
        }
        this.websocket.onmessage = (event) => {
            console.debug(event);
            console.debug(event.data);
            RxBus.getInstance().post(new OnToastEvent(event.data, "success"));
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                <GridContainer style={{marginTop:100}}>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <IconCard
                            title="Regular Map"
                            iconColor="rose"
                            icon={AddLocation}
                            content={
                                <RegularMap
                                    googleMapURL="http://ditu.google.cn/maps/api/js?v=3&key=AIzaSyC-K4_Tfnb-scqpM-wBa5MOPYXybTYjkYs&sensor=false"
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    containerElement={<div
                                        style={{height: "50vh", borderRadius: "6px", overflow: "hidden"}}/>}
                                    mapElement={<div style={{height: `100%`}}/>}
                                />
                            }
                        />
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(indexStyle)(Index);
